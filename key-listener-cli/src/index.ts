import {
	createDefaultCli,
	runDefaultCli,
	cliInfoFromPackageJson,
} from "@hediet/cli";
import { join } from "path";
import * as iohook from "iohook";

interface Data {
	run(): Promise<void>;
}

const cli = createDefaultCli<Data>().addCmd({
	getData: () => ({
		async run() {
			console.log("main");
			iohook.useRawcode(true);

			let i = 0;

			iohook.on("keydown", data => {
				console.log("down", data, new Date(), i++);
			});

			iohook.start();
		},
	}),
});

runDefaultCli({
	cli,
	dataHandler: data => data.run(),
	info: cliInfoFromPackageJson(join(__dirname, "../package.json")),
});
