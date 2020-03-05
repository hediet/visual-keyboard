import { workspace } from "vscode";
import { Disposable } from "@hediet/std/disposable";
import { observable } from "mobx";

const useChromeKioskModeKey = "debugVisualizer.useChromeKioskMode";

export class Config {
	public dispose = Disposable.fn();

	@observable
	private _useChromeKioskMode!: boolean;

	public get useChromeKioskMode(): boolean {
		return this._useChromeKioskMode;
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
	}
}

function mapUndefined<T>(val: T | undefined, defaultVal: T) {
	if (val === undefined) {
		return defaultVal;
	}
	return val;
}
