import { WebSocketStream } from "@hediet/typed-json-rpc-websocket";
import { AddressInfo } from "net";
import WebSocket = require("ws");
import { ConnectionHandler } from "./ConnectionHandler";
import * as express from "express";
import * as http from "http";
import * as serveStatic from "serve-static";
import { Config } from "./Config";
import cryptoRandomString = require("crypto-random-string");
import { distPath } from "@hediet/visual-keyboard-frontend";

export class Server {
	private server: http.Server;
	public readonly secret = cryptoRandomString({ length: 20 });

	constructor(config: Config) {
		const app = express();

		app.use(serveStatic(distPath));

		this.server = app.listen();

		console.log(`Serving "${distPath}" on port ${(this.server.address() as AddressInfo).port}`);

		const wss = new WebSocket.Server({ server: this.server });
		wss.on("connection", ws => {
			const stream = new WebSocketStream(ws);
			new ConnectionHandler(stream, this, config, this.secret);
		});
	}

	public getIndexUrl(args: { mode: "standalone" | "webViewIFrame" }): string {
		const port = process.env.USE_DEV_UI ? 8080 : this.port;
		const inWebView = args.mode === "standalone" ? "" : "&mode=webViewIFrame";
		return `http://localhost:${port}/index.html?serverPort=${this.port}&serverSecret=${this.secret}${inWebView}`;
	}

	public get mainBundleUrl(): string {
		return `http://localhost:${this.port}/main.js`;
	}

	public get port(): number {
		const httpPort = (this.server.address() as AddressInfo).port;
		return httpPort;
	}
}
