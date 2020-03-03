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

const cli = createDefaultCli<() => Promise<void>>().addCmd({
	getData: () => async () => {
		console.log("main");
		iohook.useRawcode(true);

		let i = 0;

		iohook.on("keydown", data => {
			const keycode: number = data.keycode;

			console.log(
				"down",
				data,
				{ keycode: keycode.toString(16) },
				new Date(),
				i++
			);
		});
		iohook.start();
	},
});

runDefaultCli({
	cli,
	dataHandler: data => data(),
	info: cliInfoFromPackageJson(join(__dirname, "../package.json")),
});
