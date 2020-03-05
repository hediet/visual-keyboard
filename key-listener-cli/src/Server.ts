import { startWebSocketServer } from "@hediet/typed-json-rpc-websocket-server";
import { keyboardContract } from "./contract";
import { ConsoleRpcLogger } from "@hediet/typed-json-rpc";
import { KeyboardHook } from "./KeyboardHook";
import cryptoRandomString = require("crypto-random-string");

export class Server {
	public readonly secret = cryptoRandomString({ length: 20 });

	public readonly port: number;

	constructor(options: { port?: number } = {}) {
		const clients = new Set<Client>();

		const server = startWebSocketServer(
			{
				port: options.port,
			},
			async stream => {
				const { client } = keyboardContract.registerServerToStream(
					stream,
					new ConsoleRpcLogger(),
					{
						authenticate: async ({ secret }) => {},
					}
				);

				const c = new Client(client);
				clients.add(c);
				await stream.onClosed;
				clients.delete(c);
			}
		);
		this.port = server.port;

		const keyboardHook = new KeyboardHook();

		keyboardHook.onKeyAction.sub(({ action, physicalKey, keycode }) => {
			for (const c of clients) {
				c.connection.onKeyEvent({
					action,
					physicalKey,
				});
			}
		});
	}
}

class Client {
	constructor(public readonly connection: typeof keyboardContract.TClientInterface) {}
}
