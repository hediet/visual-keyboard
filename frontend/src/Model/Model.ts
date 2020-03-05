import { observable, action, runInAction, autorun, computed } from "mobx";
import {
	Keyboard,
	KnownVirtualKeys,
	PhysicalKey,
	VirtualKey,
	FunctionalLayoutsProvider,
	MechanicalKeyDef,
} from "./Keyboard";
import { KeyBindingTrie, Modifiers, KeyWithModifiers, KeyBindingsResult } from "./keybindings";
import { MechanicalLayoutsProvider } from "./Keyboard/MechanicalLayoutsProvider";
import { UrlQueryController } from "./UrlQueryController";
import { KeyBindingsProvider, KeyBindingSet } from "./keybindings/KeyBindingsProvider";
import { WebSocketStream } from "@hediet/typed-json-rpc-websocket";
import { ConsoleRpcLogger } from "@hediet/typed-json-rpc";
import { keyboardContract } from "@hediet/key-listener";

export class Model {
	public readonly mechanicalLayoutsProvider = new MechanicalLayoutsProvider();
	public readonly functionalLayoutsProvider = new FunctionalLayoutsProvider();

	public readonly keyboard = new Keyboard(
		this.mechanicalLayoutsProvider.defaultLayout,
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
		this.activeKeyBindings = this.currentKeyBindings;
	}

	@computed
	public get currentKeyBindings(): KeyBindingTrie {
		return KeyBindingTrie.from(this.currentKeyBindingSet.keyBindings);
	}

	@observable
	public activeKeyBindings = this.currentKeyBindings;

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
		this.activeKeyBindings = this.currentKeyBindings;
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

	@computed
	private get keysSorted(): MechanicalKeyDef[] {
		return this.keyboard.mechanicalLayout.keys.slice().sort((a, b) => {
			if (a.y !== b.y) {
				return a.y - b.y;
			}
			if (a.x !== b.x) {
				return a.x - b.x;
			}
			return 0;
		});
	}

	@observable idx = -1;

	get activeKey(): PhysicalKey | undefined {
		if (this.idx < 0) {
			return undefined;
		}
		return this.keysSorted[this.idx % this.keysSorted.length].physicalKey;
	}

	private server: typeof keyboardContract.TServerInterface | undefined;

	async stayConnected(): Promise<void> {
		while (true) {
			try {
				this.idx = -1;
				const stream = await WebSocketStream.connectTo({
					host: "localhost",
					port: 8091,
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
					}
				);
				/*try {
					await server.authenticate({ secret: this.serverSecret });
				} catch (e) {
					console.error(e);
				}*/
				this.server = server;

				await stream.onClosed;
			} catch (e) {}
		}
	}
}

/*
		const str = `ESC FK01 FK02 FK03 FK04 FK05 FK06 FK07 FK08 FK09 FK10 FK11 FK12 PRSC SCLK PAUS 
TLDE AE01 AE02 AE03 AE04 AE05 AE06 AE07 AE08 AE09 AE10 AE11 AE12 BKSP INS HOME PGUP NMLK KPDV KPMU KPSU 
TAB  AD01 AD02 AD03 AD04 AD05 AD06 AD07 AD08 AD09 AD10 AD11 AD12 BKSL DELE END PGDN KP7 KP8 KP9 KPAD 
CAPS AC01 AC02 AC03 AC04 AC05 AC06 AC07 AC08 AC09 AC10 AC11 RTRN                    KP4 KP5 KP6 
LFSH LSGT AB01 AB02 AB03 AB04 AB05 AB06 AB07 AB08 AB09 AB10 RTSH UP                      KP1 KP2 KP3 KPEN 
LCTL LWIN LALT SPCE RALT RWIN MENU RCTL LEFT DOWN RIGHT                             KP0 KPDL 
 
`;

		//const map = {} as any;

		const parts = str.split(" ").filter(e => e.trim() !== "");
		for (const key of keysSorted) {
			const name = parts.shift();
			this.map[key.scanCode.toString()] = name;
		}

		console.log(this.map);
*/

/*
		let i = 0;
		this.activeKey = keysSorted[i].scanCode;
		const map: Record<string, string> = {};

		this.keyboard.onKeyPressed.sub(({ keyCodeName }) => {
			i++;
			map[keyCodeName] = this.activeKey!.toString();
			if (i === keysSorted.length) {
				console.log(JSON.stringify(map));
			} else {
				runInAction(() => {
					this.activeKey = keysSorted[i].scanCode;
				});
			}
		});*/
