import { startWebSocketServer } from "@hediet/typed-json-rpc-websocket-server";
import { keyboardContract } from "./contract";
import { ConsoleRpcLogger } from "@hediet/typed-json-rpc";
import { KeyboardHook } from "./KeyboardHook";
import cryptoRandomString = require("crypto-random-string");
import { Disposer } from "@hediet/std/disposable";

export class Server {
	public readonly serverSecret = cryptoRandomString({ length: 20 });

	public readonly port: number;

	public enableKeyboardHook = true;

	constructor(
		options: {
			port?: number;
			handleClient?: (client: Client) => void;
			handleAction?: (action: string) => void;
		} = {}
	) {
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
							c.ensureUnauthenticated();
							c.authenticateOrThrow(secret);

							authenticatedClients.add(c);

							if (options.handleClient) {
								options.handleClient(c);
							}
						},
						executeAction: async ({ action }) => {
							c.ensureAuthenticated();

							if (options.handleAction) {
								options.handleAction(action);
							}
						},
					}
				);

				const c = new Client(client, this.serverSecret);

				await stream.onClosed;
				authenticatedClients.delete(c);
				c.disposer.dispose();
			}
		);
		this.port = server.port;

		const keyboardHook = new KeyboardHook();
		keyboardHook.onKeyAction.sub(({ action, physicalKey, keycode }) => {
			if (this.enableKeyboardHook) {
				for (const c of authenticatedClients) {
					c.connection.onKeyEvent({
						action,
						physicalKey,
					});
				}
			}
		});
	}
}

export class Client {
	private _authenticated = false;
	public get authenticated() {
		return this._authenticated;
	}

	public readonly disposer = new Disposer();

	public get connection(): typeof keyboardContract.TClientInterface {
		if (!this.authenticated) {
			throw new Error("Cliet is not authenticated!");
		}
		return this._connection;
	}

	constructor(
		private readonly _connection: typeof keyboardContract.TClientInterface,
		private readonly serverSecret: string
	) {}

	public authenticateOrThrow(secret: string): void {
		if (secret !== this.serverSecret) {
			throw new Error("Invalid secret!");
		}
		this._authenticated = true;
	}

	public ensureUnauthenticated(): void {
		if (this.authenticated) {
			throw new Error("Already authenticated!");
		}
	}

	public ensureAuthenticated(): void {
		if (!this.authenticated) {
			throw new Error("Not authenticated!");
		}
	}
}
