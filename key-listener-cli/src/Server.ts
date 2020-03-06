import { startWebSocketServer } from "@hediet/typed-json-rpc-websocket-server";
import { keyboardContract } from "./contract";
import { ConsoleRpcLogger } from "@hediet/typed-json-rpc";
import { KeyboardHook } from "./KeyboardHook";
import cryptoRandomString = require("crypto-random-string");

export class Server {
	public readonly secret = cryptoRandomString({ length: 20 });

	public readonly port: number;

	constructor(options: { port?: number; handleClient?: (client: Client) => void } = {}) {
		const authenticatedClients = new Set<Client>();

		const server = startWebSocketServer(
			{
				port: options.port || 0,
			},
			async stream => {
				const { client } = keyboardContract.registerServerToStream(
					stream,
					new ConsoleRpcLogger(),
					{
						authenticate: async ({ secret }) => {
							if (secret !== this.secret) {
								throw new Error("Invalid secret!");
							}
							if (!c.authenticated) {
								c.authenticated = true;
								authenticatedClients.add(c);
								if (options.handleClient) {
									options.handleClient(c);
								}
							}
						},
					}
				);

				const c = new Client(client);

				await stream.onClosed;
				authenticatedClients.delete(c);
			}
		);
		this.port = server.port;

		const keyboardHook = new KeyboardHook();
		keyboardHook.onKeyAction.sub(({ action, physicalKey, keycode }) => {
			for (const c of authenticatedClients) {
				c.connection.onKeyEvent({
					action,
					physicalKey,
				});
			}
		});
	}
}

export class Client {
	public authenticated = false;

	constructor(public readonly connection: typeof keyboardContract.TClientInterface) {}
}
