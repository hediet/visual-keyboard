import { WebSocketStream } from "@hediet/typed-json-rpc-websocket";
import { AddressInfo } from "net";
import WebSocket = require("ws");
import * as express from "express";
import * as http from "http";
import * as serveStatic from "serve-static";
import { Config } from "./Config";
import { distPath } from "@hediet/visual-keyboard-frontend";
import { Server as WebsocketServer } from "@hediet/key-listener";
import { autorun } from "mobx";
import * as vscode from "vscode";
import { Disposable } from "@hediet/std/disposable";

export class Server {
	private server: http.Server;
	private readonly wsServer: WebsocketServer;
	public readonly dispose = Disposable.fn();

	public get secret(): string {
		return this.wsServer.secret;
	}

	public get wsPort(): number {
		return this.wsServer.port;
	}

	constructor(config: Config) {
		this.wsServer = new WebsocketServer({
			handleClient: client => {
				client.disposer.track({
					dispose: autorun(() => {
						client.connection.updateSettings({
							physicalLayout: config.physicalLayout,
							functionalLayout: config.functionalLayout,
							keyBindingSet: null,
						});
					}),
				});
			},
			handleAction: async action => {
				await vscode.commands.executeCommand(action);
			},
		});

		this.dispose.track(
			vscode.window.onDidChangeWindowState(s => {
				this.updateState();
			})
		);

		const app = express();
		app.use(serveStatic(distPath));
		this.server = app.listen();
		console.log(`Serving "${distPath}" on port ${(this.server.address() as AddressInfo).port}`);
	}

	private updateState() {
		const focused = vscode.window.state.focused;
		this.wsServer.enableKeyboardHook = focused;
	}

	public getIndexUrl(args: { mode: "standalone" | "webViewIFrame" }): string {
		const port = process.env.USE_DEV_UI ? 8080 : this.port;
		//const inWebView = args.mode === "standalone" ? "" : "&mode=webViewIFrame";
		const headless = args.mode === "standalone" ? "" : "&headless";
		return `http://localhost:${port}/index.html?serverPort=${this.wsPort}&serverSecret=${this.secret}${headless}`;
	}

	public get mainBundleUrl(): string {
		return `http://localhost:${this.port}/main.js`;
	}

	public get port(): number {
		const httpPort = (this.server.address() as AddressInfo).port;
		return httpPort;
	}
}
