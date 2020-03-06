import { observable, action, computed } from "mobx";
import { PhysicalKey, VirtualKey } from "./primitives";
import { PhysicalLayout } from "./PhysicalLayout";
import { FunctionalLayout, FunctionalLayoutState, KeyFunction } from "./FunctionalLayout";
import { EventEmitter } from "@hediet/std/events";

export class Keyboard {
	@observable
	public physicalLayout: PhysicalLayout;

	@observable
	private _functionalLayout!: FunctionalLayout;

	public get functionalLayout(): FunctionalLayout {
		return this._functionalLayout;
	}

	@action
	public setFunctionalLayout(newLayout: FunctionalLayout) {
		this._functionalLayout = newLayout;
		const s = [...this.pressedKeys.values()];
		this.reset();
		for (const k of s) {
			this.handleKeyPress(k);
		}
	}

	@observable
	public currentFunctionalLayoutState!: FunctionalLayoutState;

	@observable
	private readonly _pressedKeys = new Map<PhysicalKey, () => void>();

	@computed
	public get pressedKeys(): ReadonlySet<PhysicalKey> {
		return new Set(this._pressedKeys.keys());
	}

	@observable
	public readonly pressedVirtualKeys = new Set<VirtualKey>();

	private readonly _onKeyPressed = new EventEmitter<{
		key: PhysicalKey;
		keyFunction: KeyFunction;
	}>();
	public readonly onKeyPressed = this._onKeyPressed.asEvent();

	constructor(physicalLayout: PhysicalLayout, functionalLayout: FunctionalLayout) {
		this.physicalLayout = physicalLayout;
		this.setFunctionalLayout(functionalLayout);
	}

	@action
	public reset() {
		this._pressedKeys.clear();
		this.pressedVirtualKeys.clear();
		this.currentFunctionalLayoutState = this.functionalLayout.defaultState;
	}

	@action
	public handleKeyPress(key: PhysicalKey): void {
		if (this._pressedKeys.has(key)) {
			return;
		}

		this._pressedKeys.set(key, () => {
			if (f && f.virtualKey) {
				this.pressedVirtualKeys.delete(f.virtualKey);
			}
		});

		const f = this.currentFunctionalLayoutState.getFunction(key);
		this._onKeyPressed.emit({
			key: key,
			keyFunction: f || {},
		});

		if (f && f.virtualKey) {
			this.pressedVirtualKeys.add(f.virtualKey);
		}

		if (f && f.stateAfterKeyPressed) {
			this.currentFunctionalLayoutState = f.stateAfterKeyPressed;
		}
	}

	@action
	public handleKeyRelease(key: PhysicalKey): void {
		const fn = this._pressedKeys.get(key);
		if (!fn) {
			return;
		}

		fn();
		this._pressedKeys.delete(key);

		const f = this.currentFunctionalLayoutState.getFunction(key);
		if (f && f.stateAfterKeyReleased) {
			this.currentFunctionalLayoutState = f.stateAfterKeyReleased;
		}
	}

	@action
	public handleButtonToggle(key: PhysicalKey): void {
		if (this._pressedKeys.has(key)) {
			this.handleKeyRelease(key);
		} else {
			this.handleKeyPress(key);
		}
	}

	public isKeyPressed(keyDef: PhysicalKey): boolean {
		return this.pressedKeys.has(keyDef);
	}
}
