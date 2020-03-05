import { window, ExtensionContext, commands } from "vscode";
import { Disposable } from "@hediet/std/disposable";
import {
	enableHotReload,
	hotRequireExportedFn,
	registerUpdateReconciler,
	getReloadCount,
} from "@hediet/node-reload";

if (process.env.HOT_RELOAD) {
	enableHotReload({ entryModule: module, loggingEnabled: true });
}
registerUpdateReconciler(module);

import { WebViews } from "./WebViews";
import { Server } from "./Server";
import { Config } from "./Config";

export class Extension {
	public readonly dispose = Disposable.fn();

	private readonly config = new Config();

	private readonly server = new Server(this.config);
	private readonly views = this.dispose.track(new WebViews(this.server));

	constructor() {
		if (getReloadCount(module) > 0) {
			const i = this.dispose.track(window.createStatusBarItem());
			i.text = "reload" + getReloadCount(module);
			i.show();
		}

		this.dispose.track(
			commands.registerCommand("key-bindings-viewer.open-view", () => {
				this.views.createNew();
			})
		);
	}
}

export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		hotRequireExportedFn(module, Extension, Extension => new Extension())
	);
}

export function deactivate() {}
