import { readFileSync, writeFileSync } from "fs";
import { FunctionalLayoutData } from "../src/model/Keyboard/FunctionalLayout";
import { ScanCode } from "../src/model/Keyboard/primitives";
import { getJsCodeFromScanCode } from "../src/model/JsKeycodes";

export class Main {
	run() {
		/*const path =
			"S:\\dev\\2019\\Neo2Net\\KeyboardMapper\\Data\\KeyDefinitions.tyml";

		const content = readFileSync(path, { encoding: "utf8" });

		const r = /KeyDefinition <(.*)>[\}]*? Text:<(.*)>/g;

		const map = new Map<string, string>();*/
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

		const path = "./functional-layouts/us.json";
		const neoJson = JSON.parse(
			readFileSync(path, {
				encoding: "utf8",
			})
		) as FunctionalLayoutData;

		function translate(str: string) {
			const s = ScanCode.from(str);
			const newKey = getJsCodeFromScanCode(s);
			return newKey;
		}

		for (const [key, val] of Object.entries(neoJson.modes)) {
			const newMapping = {};
			for (const [k, v] of Object.entries(val.mapping)) {
				newMapping[translate(k)] = v;
			}

			val.mapping = newMapping;
			if (val.modifiers) {
				for (const arr of val.modifiers) {
					for (let i = 0; i < arr.length; i++) {
						arr[i] = translate(arr[i]);
					}
				}
			}
		}

		writeFileSync(path, JSON.stringify(neoJson), {
			encoding: "utf8",
		});
	}
}

//require("C:\\Users\\henni\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\easy-attach\\")();

new Main().run();
