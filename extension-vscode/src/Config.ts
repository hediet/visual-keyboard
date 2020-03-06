import { workspace } from "vscode";
import { Disposable } from "@hediet/std/disposable";
import { observable } from "mobx";

const extensionId = "key-bindings-viewer";
const useChromeKioskModeKey = `${extensionId}.useChromeKioskMode`;
const physicalLayoutKey = `${extensionId}.physicalLayout`;
const functionalLayoutKey = `${extensionId}.functionalLayout`;

export class Config {
	public dispose = Disposable.fn();

	@observable
	private _useChromeKioskMode!: boolean;

	public get useChromeKioskMode(): boolean {
		return this._useChromeKioskMode;
	}

	@observable
	private _physicalLayout: string | null = null;

	public get physicalLayout() {
		return this._physicalLayout;
	}

	@observable
	private _functionalLayout: string | null = null;

	public get functionalLayout() {
		return this._functionalLayout;
	}

	constructor() {
		this.updateConfig();
		this.dispose.track(
			workspace.onDidChangeConfiguration(() => {
				this.updateConfig();
			})
		);
	}

	private updateConfig(): void {
		const c = workspace.getConfiguration();

		this._useChromeKioskMode = mapUndefined(c.get<boolean>(useChromeKioskModeKey), true);
		this._physicalLayout = mapUndefined(c.get<string>(physicalLayoutKey), null);
		this._functionalLayout = mapUndefined(c.get<string>(functionalLayoutKey), null);
	}
}

function mapUndefined<T>(val: T | undefined, defaultVal: T) {
	if (val === undefined) {
		return defaultVal;
	}
	return val;
}
