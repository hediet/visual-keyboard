import { createDefaultCli, runDefaultCli, cliInfoFromPackageJson } from "@hediet/cli";
import { join } from "path";
import { Server } from "./Server";

const cli = createDefaultCli<() => Promise<void>>().addCmd({
	getData: () => async () => {
		const server = new Server();
		console.log(server.port);
	},
});

runDefaultCli({
	cli,
	dataHandler: data => data(),
	info: cliInfoFromPackageJson(join(__dirname, "../package.json")),
});
