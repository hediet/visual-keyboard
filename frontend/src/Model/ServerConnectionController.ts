import { keyboardContract } from "@hediet/key-listener/dist/contract";
import { ConsoleRpcLogger } from "@hediet/typed-json-rpc";
import { WebSocketStream } from "@hediet/typed-json-rpc-websocket";
import { Model } from "./Model";
import { observable, computed } from "mobx";
import { PhysicalKey } from "./Keyboard";

export class ServerConnectionController {
	private server: typeof keyboardContract.TServerInterface | undefined;

	@observable idx = -1;

	@computed get keysSorted() {
		return this.model.keyboard.physicalLayout.keysSortedByPosition;
	}

	get activeKey(): PhysicalKey | undefined {
		if (this.idx < 0) {
			return undefined;
		}
		return this.keysSorted[this.idx % this.keysSorted.length].physicalKey;
	}

	constructor(private readonly model: Model) {
		model.onAction.sub(({ action }) => {
			if (this.server) {
				this.server.executeAction({ action: action.name });
			}
		});

		this.stayConnected();
	}

	async stayConnected(): Promise<void> {
		const serverInfo = this.model.config.server;
		if (!serverInfo) {
			this.model.initialized = true;
			return;
		}

		while (true) {
			try {
				this.idx = -1;
				const stream = await WebSocketStream.connectTo({
					host: "localhost",
					port: serverInfo.port,
				});
				const { server } = keyboardContract.getServerFromStream(
					stream,
					new ConsoleRpcLogger(),
					{
						selectNextKey: async ({}) => {
							this.idx++;
							return {
								physicalKey: this.activeKey!.name,
							};
						},
						onKeyEvent: async ({ action, physicalKey }) => {
							const key = PhysicalKey.from(physicalKey);
							if (action === "pressed") {
								this.model.keyboard.handleKeyPress(key, "key");
							} else {
								this.model.keyboard.handleKeyRelease(key, "key");
							}
						},
						updateSettings: async ({
							functionalLayout,
							physicalLayout,
							keyBindingSet,
						}) => {
							if (functionalLayout) {
								const l = this.model.functionalLayoutsProvider.findLayout(
									functionalLayout
								);
								if (l) {
									this.model.keyboard.setFunctionalLayout(l);
								}
							}

							if (physicalLayout) {
								const l = this.model.physicalLayoutsProvider.findLayout(
									physicalLayout
								);
								if (l) {
									this.model.keyboard.physicalLayout = l;
								}
							}
							this.model.initialized = true;
						},
					}
				);
				try {
					await server.authenticate({ secret: serverInfo.secret });
				} catch (e) {
					console.error(e);
				}
				this.server = server;

				await stream.onClosed;
			} catch (e) {}
		}
	}
}
