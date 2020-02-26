import neoLayout = require("../../../data/functional-layouts/de.json");
import { observable, action, computed } from "mobx";
import { ScanCode, VirtualKey } from "./primitives";
import { MechanicalLayout } from "./MechanicalLayout";
import {
	FunctionalLayout,
	FunctionalLayoutState,
	FunctionalLayoutImpl,
	KeyFunction,
} from "./FunctionalLayout";
import { EventEmitter } from "@hediet/std/events";
import { getScanCodeFromJsCode } from "../JsKeycodes";

export class Keyboard {
	@observable
	public mechanicalLayout: MechanicalLayout;

	@observable
	public functionalLayout: FunctionalLayout = new FunctionalLayoutImpl(
		neoLayout
	);

	@observable
	public currentFunctionalLayoutState: FunctionalLayoutState = this
		.functionalLayout.defaultState;

	@observable
	private readonly _pressedKeys = new Map<ScanCode, () => void>();

	@computed
	public get pressedKeys(): ReadonlySet<ScanCode> {
		return new Set(this._pressedKeys.keys());
	}

	@observable
	public readonly pressedVirtualKeys = new Set<VirtualKey>();

	private readonly _onKeyPressed = new EventEmitter<{
		key: ScanCode;
		keyFunction: KeyFunction;
	}>();
	public readonly onKeyPressed = this._onKeyPressed.asEvent();

	constructor(mechanicalLayout: MechanicalLayout) {
		this.mechanicalLayout = mechanicalLayout;
	}

	@action
	public handleKeyDown(keyCodeName: string): void {
		const scanCode = getScanCodeFromJsCode(keyCodeName);
		if (scanCode) {
			this.handleButtonPress(scanCode);
		}
	}

	@action
	public handleKeyUp(keyCodeName: string): void {
		const scanCode = getScanCodeFromJsCode(keyCodeName);
		if (scanCode) {
			this.handleButtonRelease(scanCode);
		}
	}

	@action
	public reset() {
		this._pressedKeys.clear();
		this.pressedVirtualKeys.clear();
		this.currentFunctionalLayoutState = this.functionalLayout.defaultState;
	}

	private handleButtonPress(key: ScanCode): void {
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

	private handleButtonRelease(key: ScanCode): void {
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
	public handleButtonToggle(key: ScanCode): void {
		if (this._pressedKeys.has(key)) {
			this.handleButtonRelease(key);
		} else {
			this.handleButtonPress(key);
		}
	}

	public isKeyPressed(keyDef: ScanCode): boolean {
		return this.pressedKeys.has(keyDef);
	}
}
