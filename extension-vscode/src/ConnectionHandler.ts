import { Disposable } from "@hediet/std/disposable";
import { keyboardContract } from "@hediet/key-listener";
import { ConsoleRpcLogger, RequestHandlingError } from "@hediet/typed-json-rpc";
import { WebSocketStream } from "@hediet/typed-json-rpc-websocket";
import { observable, autorun } from "mobx";
import { Server } from "./Server";
import * as open from "open";
import chromeLauncher = require("chrome-launcher");
import { Config } from "./Config";

export class ConnectionHandler {
	public readonly dispose = Disposable.fn();

	constructor(stream: WebSocketStream, server: Server, config: Config, serverSecret: string) {
		let authenticated = false;

		function throwIfNotAuthenticated() {
			if (!authenticated) {
				throw new RequestHandlingError("Not authenticated");
			}
		}
		/*
		const { client, channel } = keyboardContract.registerServerToStream(
			stream,
			new ConsoleRpcLogger(),
			{
				authenticate: async ({ secret }, { newErr }) => {
					if (secret !== serverSecret) {
						return newErr({ errorMessage: "Invalid Secret" });
					} else {
						authenticated = true;
					}
				},
				refresh: async () => {
					throwIfNotAuthenticated();

					if (this.watcher) {
						this.watcher.refresh();
					}
				},
				setExpression: async ({ newExpression }) => {
					throwIfNotAuthenticated();

					let oldPreferredDataExtractor: EvaluationWatcher["preferredDataExtractor"];
					if (this.watcher) {
						oldPreferredDataExtractor = this.watcher.preferredDataExtractor;
						this.dispose.untrack(this.watcher).dispose();
					}
					this.watcher = this.dispose.track(
						dataSource.createEvaluationWatcher(newExpression, {
							preferredDataExtractor: oldPreferredDataExtractor,
						})
					);
				},
				openInBrowser: async ({}) => {
					throwIfNotAuthenticated();

					const url = server.getIndexUrl({
						mode: "standalone",
						expression: this.watcher ? this.watcher.expression : undefined,
					});

					let opened = false;
					if (config.useChromeKioskMode) {
						opened = await launchChrome(url);
					}
					if (!opened) {
						open(url);
					}
				},
			}
		);
		*/

		stream.onClosed.then(() => {
			this.dispose();
		});
	}
}

async function launchChrome(url: string): Promise<boolean> {
	try {
		const _chrome = await chromeLauncher.launch({
			startingUrl: url,
			// `--window-size=${width},${height}`
			chromeFlags: ["--app=" + url],
		});
		return true;
	} catch (e) {
		return false;
	}
}
