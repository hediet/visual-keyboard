declare const window: Window & {
	webViewData?: { serverSecret: string; serverPort: number; headless: boolean };
};

export interface Config {
	server?: { secret: string; port: number };
	headless: boolean;
}

export function getConfig(): Config {
	const d = window.webViewData;
	if (d) {
		return {
			server: {
				secret: d.serverSecret,
				port: d.serverPort,
			},
			headless: d.headless,
		};
	}

	const searchParams = new URLSearchParams(window.location.search);

	const portStr = searchParams.get("serverPort");
	let port: number | undefined;
	if (portStr !== null) {
		port = parseInt(portStr);
	}
	let secret = searchParams.get("serverSecret");
	if (secret === null) {
		if (port !== undefined) {
			console.error("No Server Secret given.");
		}
		secret = "";
	}
	const headless = searchParams.get("headless") !== null;

	return {
		headless,
		server:
			port === undefined
				? undefined
				: {
						port,
						secret,
				  },
	};
}
