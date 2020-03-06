import { observable, action, runInAction, autorun, computed } from "mobx";
import {
	Keyboard,
	KnownVirtualKeys,
	PhysicalKey,
	VirtualKey,
	FunctionalLayoutsProvider,
	PhysicalKeyDef,
} from "./Keyboard";
import { KeyBindingTrie, Modifiers, KeyWithModifiers, KeyBindingsResult } from "./keybindings";
import { PhysicalLayoutsProvider } from "./Keyboard/PhysicalLayoutsProvider";
import { UrlQueryController } from "./UrlQueryController";
import { KeyBindingsProvider, KeyBindingSet } from "./keybindings/KeyBindingsProvider";
import { WebSocketStream } from "@hediet/typed-json-rpc-websocket";
import { ConsoleRpcLogger } from "@hediet/typed-json-rpc";
import { keyboardContract } from "@hediet/key-listener/dist/contract";

export class Model {
	public readonly physicalLayoutsProvider = new PhysicalLayoutsProvider();
	public readonly functionalLayoutsProvider = new FunctionalLayoutsProvider();

	public readonly keyboard = new Keyboard(
		this.physicalLayoutsProvider.defaultLayout,
		this.functionalLayoutsProvider.defaultLayout
	);

	public readonly keyBindingsProvider = new KeyBindingsProvider();

	@observable
	private _currentKeyBindingSet = this.keyBindingsProvider.getKeyBindingSets()[0];

	public get currentKeyBindingSet(): KeyBindingSet {
		return this._currentKeyBindingSet;
	}

	@action
	public setCurrentKeyBindingSet(set: KeyBindingSet) {
		this._currentKeyBindingSet = set;
		this.activeKeyBindings = this.currentKeyBindingTrieRoot;
	}

	@computed
	public get currentKeyBindingTrieRoot(): KeyBindingTrie {
		return KeyBindingTrie.from(this.currentKeyBindingSet.keyBindings);
	}

	@observable
	public activeKeyBindings = this.currentKeyBindingTrieRoot;

	@observable
	public activeKeyBindingsPath: KeyWithModifiers[] = [];

	@observable
	public preventDefault = true;

	get activeModifiers(): Modifiers {
		const vks = this.keyboard.pressedVirtualKeys;
		const hasCtrl = vks.has(KnownVirtualKeys.CtrlL) || vks.has(KnownVirtualKeys.CtrlR);
		const hasAlt = vks.has(KnownVirtualKeys.AltL) || vks.has(KnownVirtualKeys.AltR);
		const hasShift = vks.has(KnownVirtualKeys.ShiftL) || vks.has(KnownVirtualKeys.ShiftR);

		const hasMeta = vks.has(KnownVirtualKeys.MetaL) || vks.has(KnownVirtualKeys.MetaR);

		return new Modifiers(hasShift, hasAlt, hasCtrl, hasMeta);
	}

	public findKeyBindings(key: VirtualKey): KeyBindingsResult {
		return this.activeKeyBindings.findKeyBindings(
			new KeyWithModifiers(key, this.activeModifiers)
		);
	}

	public resetCurrentKeyBindingPath() {
		this.activeKeyBindings = this.currentKeyBindingTrieRoot;
		this.activeKeyBindingsPath.length = 0;
	}

	private readonly urlQueryController = new UrlQueryController(this);

	constructor() {
		this.keyboard.onKeyPressed.sub(({ key, keyFunction }) => {
			if (keyFunction.virtualKey) {
				const bindings = this.findKeyBindings(keyFunction.virtualKey);

				const keyWithModfs = new KeyWithModifiers(
					keyFunction.virtualKey,
					this.activeModifiers
				);

				if (bindings.followingKeyBindings) {
					this.activeKeyBindings = bindings.followingKeyBindings;
					this.activeKeyBindingsPath.push(keyWithModfs);
					this.keyboard.reset();
				}
			}

			if (keyFunction.virtualKey === KnownVirtualKeys.Escape) {
				this.resetCurrentKeyBindingPath();
			}
		});

		window.addEventListener("keydown", e => {
			const physicalKey = PhysicalKey.from(e.code);
			this.keyboard.handleKeyPress(physicalKey);
			if (this.preventDefault) {
				e.preventDefault();
			}
			e.stopPropagation();
		});
		window.addEventListener("keyup", e => {
			const physicalKey = PhysicalKey.from(e.code);
			this.keyboard.handleKeyRelease(physicalKey);
			if (this.preventDefault) {
				e.preventDefault();
			}
			e.stopPropagation();
		});

		this.stayConnected();
	}

	@observable idx = -1;

	@computed get keysSorted() {
		return this.keyboard.physicalLayout.keysSortedByPosition;
	}

	get activeKey(): PhysicalKey | undefined {
		if (this.idx < 0) {
			return undefined;
		}
		return this.keysSorted[this.idx % this.keysSorted.length].physicalKey;
	}

	public readonly data = getData();
	private server: typeof keyboardContract.TServerInterface | undefined;

	@observable
	public initialized = false;

	async stayConnected(): Promise<void> {
		const data = this.data.server;
		if (!data) {
			this.initialized = true;
			return;
		}

		while (true) {
			try {
				this.idx = -1;
				const stream = await WebSocketStream.connectTo({
					host: "localhost",
					port: data.port,
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
								this.keyboard.handleKeyPress(key);
							} else {
								this.keyboard.handleKeyRelease(key);
							}
						},
						updateSettings: async ({
							functionalLayout,
							physicalLayout,
							keyBindingSet,
						}) => {
							if (functionalLayout) {
								const l = this.functionalLayoutsProvider.findLayout(
									functionalLayout
								);
								if (l) {
									this.keyboard.setFunctionalLayout(l);
								}
							}

							if (physicalLayout) {
								const l = this.physicalLayoutsProvider.findLayout(physicalLayout);
								if (l) {
									this.keyboard.physicalLayout = l;
								}
							}
							this.initialized = true;
						},
					}
				);
				try {
					await server.authenticate({ secret: data.secret });
				} catch (e) {
					console.error(e);
				}
				this.server = server;

				await stream.onClosed;
			} catch (e) {}
		}
	}
}

declare const window: Window & {
	webViewData?: { serverSecret: string; serverPort: number; headless: boolean };
};

function getData(): { server?: { secret: string; port: number }; headless: boolean } {
	const d = window.webViewData;
	if (d) {
		return {
			server: {
				secret: d.serverSecret,
				port: d.serverPort,
			},
			headless: d.headless,
		};
	}

	const searchParams = new URLSearchParams(window.location.search);

	const portStr = searchParams.get("serverPort");
	let port: number | undefined;
	if (portStr !== null) {
		port = parseInt(portStr);
	}
	let secret = searchParams.get("serverSecret");
	if (secret === null) {
		if (port !== undefined) {
			console.error("No Server Secret given.");
		}
		secret = "";
	}
	const headless = searchParams.get("headless") !== null;

	return {
		headless,
		server:
			port === undefined
				? undefined
				: {
						port,
						secret,
				  },
	};
}
