import { Server } from "./Server";
import * as open from "open";
import chromeLauncher = require("chrome-launcher");
import { Config } from "./Config";

export async function openBrowserView(server: Server, config: Config): Promise<void> {
	const url = server.getIndexUrl({
		mode: "standalone",
	});

	let opened = false;
	if (config.useChromeKioskMode) {
		opened = await launchChrome(url);
	}
	if (!opened) {
		open(url);
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
