import { readFileSync, writeFileSync } from "fs";
import { FunctionalLayoutData } from "../src/model/Keyboard/FunctionalLayout";

export class Main {
	run() {
		const path =
			"S:\\dev\\2019\\Neo2Net\\KeyboardMapper\\Data\\KeyDefinitions.tyml";

		const content = readFileSync(path, { encoding: "utf8" });

		const r = /KeyDefinition <(.*)>[\}]*? Text:<(.*)>/g;

		const map = new Map<string, string>();
		/*
		while (true) {
			const m = r.exec(content);
			if (!m) {
				break;
			}
			const name = m[1];
			const text = m[2];
			map.set(name, text);
			console.log(name, text);
		}*/

		const neoJson = JSON.parse(
			readFileSync("./functional-layouts/de_neo.json", {
				encoding: "utf8",
			})
		) as FunctionalLayoutData;

		for (const [key, val] of Object.entries(neoJson.modes)) {
			for (const [k, v] of Object.entries(val.mapping)) {
			}
		}

		writeFileSync(
			"./functional-layouts/de_neo.json",
			JSON.stringify(neoJson),
			{
				encoding: "utf8",
			}
		);
	}
}

//require("C:\\Users\\henni\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\easy-attach\\")();

new Main().run();
