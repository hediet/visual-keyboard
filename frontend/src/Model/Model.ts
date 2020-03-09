import { action, computed, observable } from "mobx";
import {
	KeyBindingsResult,
	KeyBindingTrie,
	KeyWithModifiers,
	Modifiers,
	Action,
} from "./keybindings";
import { KeyBindingSet, KeyBindingsProvider } from "./keybindings/KeyBindingsProvider";
import {
	FunctionalLayoutsProvider,
	Keyboard,
	KnownVirtualKeys,
	PhysicalKey,
	VirtualKey,
} from "./Keyboard";
import { PhysicalLayoutsProvider } from "./Keyboard/PhysicalLayoutsProvider";
import { UrlQueryController } from "./UrlQueryController";
import { WindowKeyHandler } from "./WindowKeyHandler";
import { EventEmitter } from "@hediet/std/events";
import { getConfig } from "./Config";
import { ServerConnectionController } from "./ServerConnectionController";

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

	public readonly config = getConfig();

	@observable
	public initialized = false;

	private readonly actionEmitter = new EventEmitter<{ action: Action }>();
	public readonly onAction = this.actionEmitter.asEvent();

	private readonly urlQueryController = new UrlQueryController(this);
	private readonly windowKeyHandler = new WindowKeyHandler(this);
	private readonly serverConnectionController = new ServerConnectionController(this);

	constructor() {
		this.keyboard.onKeyPressed.sub(({ key, keyFunction, mode }) => {
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
				} else {
					if (
						!keyFunction.stateAfterKeyPressed &&
						!this.isKeyBindingsModifier(keyFunction.virtualKey)
					) {
						if (mode === "button") {
							this.keyboard.handleKeyRelease(key, "button");
							const b = bindings.bindings[0];
							if (b) {
								this.actionEmitter.emit({ action: b.action });
							}
						} else {
							this.resetCurrentKeyBindingPath();
						}
					}
				}
			}

			if (keyFunction.virtualKey === KnownVirtualKeys.Escape) {
				this.resetCurrentKeyBindingPath();
			}
		});
	}

	get activeModifiers(): Modifiers {
		const vks = this.keyboard.pressedVirtualKeys;
		const hasCtrl = vks.has(KnownVirtualKeys.CtrlL) || vks.has(KnownVirtualKeys.CtrlR);
		const hasAlt = vks.has(KnownVirtualKeys.AltL) || vks.has(KnownVirtualKeys.AltR);
		const hasShift = vks.has(KnownVirtualKeys.ShiftL) || vks.has(KnownVirtualKeys.ShiftR);
		const hasMeta = vks.has(KnownVirtualKeys.MetaL) || vks.has(KnownVirtualKeys.MetaR);

		return new Modifiers(hasShift, hasAlt, hasCtrl, hasMeta);
	}

	private isKeyBindingsModifier(m: VirtualKey): boolean {
		const s = new Set([
			KnownVirtualKeys.CtrlL,
			KnownVirtualKeys.CtrlR,
			KnownVirtualKeys.AltL,
			KnownVirtualKeys.AltR,
			KnownVirtualKeys.ShiftL,
			KnownVirtualKeys.ShiftR,
			KnownVirtualKeys.MetaL,
			KnownVirtualKeys.MetaR,
		]);
		return s.has(m);
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

	@action
	public setCurrentKeyBindingSet(set: KeyBindingSet) {
		this._currentKeyBindingSet = set;
		this.activeKeyBindings = this.currentKeyBindingTrieRoot;
	}
}
