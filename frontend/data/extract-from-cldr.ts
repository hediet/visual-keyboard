import { readFileSync, writeFileSync } from "fs";
import {
	FunctionalLayoutData,
	FunctionalLayoutModeData,
} from "../src/model/Keyboard";
import xml2js = require("xml2js");

const table = {
	E01: "2",
	E02: "3",
	E03: "4",
	E04: "5",
	E05: "6",
	E06: "7",
	E07: "8",
	E08: "9",
	E09: "10",
	E10: "11",
	E11: "12",
	E12: "13",
	D01: "16",
	D02: "17",
	D03: "18",
	D04: "19",
	D05: "20",
	D06: "21",
	D07: "22",
	D08: "23",
	D09: "24",
	D10: "25",
	D11: "26",
	D12: "27",
	C01: "30",
	C02: "31",
	C03: "32",
	C04: "33",
	C05: "34",
	C06: "35",
	C07: "36",
	C08: "37",
	C09: "38",
	C10: "39",
	C11: "40",
	E00: "41",
	C12: "43",
	B01: "44",
	B02: "45",
	B03: "46",
	B04: "47",
	B05: "48",
	B06: "49",
	B07: "50",
	B08: "51",
	B09: "52",
	B10: "53",
	A03: "57",
	B00: "86",
	B11: "115",
};

const str = readFileSync(
	"./unicode/cldr-keyboards.36.0/keyboards/windows/de-t-k0-windows.xml",
	{ encoding: "utf8" }
);

function mapTextToVirtualKey(text: string): string {
	if (text.match(/[a-z0-9]/)) {
		return text.toUpperCase();
	}
	switch (text) {
		case "ü":
			return "Oem1";
		case "#":
			return "Oem2";
		case "ö":
			return "Oem3";
		case "ß":
			return "Oem4";
		case "^":
			return "Oem5";
		case "´":
			return "Oem6";
		case "ä":
			return "Oem7";
		case "<":
			return "Oem102";
		case ",":
			return "OemComma";
		case ".":
			return "OemPeriod";
		case "-":
			return "OemMinus";
		case "+":
			return "OemPlus";
		case " ":
			return "Space";
	}
	throw new Error(`Didn't handle "${text}"`);
}

async function main(): Promise<void> {
	const parser = new xml2js.Parser();
	const result = await parser.parseStringPromise(str);

	const data: FunctionalLayoutData = {
		name: "test",
		modes: {
			default: {
				mapping: {
					"0x36": { virtualKey: "ShiftR" },
					"0x2a": { virtualKey: "ShiftL" },
					"0x3b": { virtualKey: "F1" },
					"0x3c": { virtualKey: "F2" },
					"0x3d": { virtualKey: "F3" },
					"0x3e": { virtualKey: "F4" },
					"0x3f": { virtualKey: "F5" },
					"0x40": { virtualKey: "F6" },
					"0x41": { virtualKey: "F7" },
					"0x42": { virtualKey: "F8" },
					"0x43": { virtualKey: "F9" },
					"0x44": { virtualKey: "F10" },
					"0x57": { virtualKey: "F11" },
					"0x58": { virtualKey: "F12" },
					"0x01": { virtualKey: "Escape" },
					"0x1d": { virtualKey: "CtrlL" },
					"0xe01d": { virtualKey: "CtrlR" },
					"0x38": { virtualKey: "AltL" },
					"0x1c": { virtualKey: "Return" },
					"0x0f": { virtualKey: "Tab" },
					"0x0e": { virtualKey: "BackSpace" },
					"0xe05b": { virtualKey: "OsL" },
					"0xe05c": { virtualKey: "OsR" },
					"0xe05d": { virtualKey: "Apps" },
					"0x3a": { virtualKey: "Caps" },
					"0xe038": { virtualKey: "AltR" },

					"0xe048": { virtualKey: "Up" },
					"0xe04b": { virtualKey: "Left" },
					"0xe050": { virtualKey: "Down" },
					"0xe04d": { virtualKey: "Right" },

					"0xe052": { virtualKey: "Insert" },
					"0xe047": { virtualKey: "Home" },
					"0xe049": { virtualKey: "Prior" },

					"0xe053": { virtualKey: "Delete" },
					"0xe04f": { virtualKey: "End" },
					"0xe051": { virtualKey: "Next" },
				},
			},
		},
	};

	let idx = 1;
	for (const mode of result.keyboard.keyMap) {
		const modifiersStr = (mode.$ || {}).modifiers as string;

		const map = {
			altR: ["0xe038"],
			alt: ["0x38"],
			caps: ["0x3a"],
			ctrl: ["0xe01d", "0x1d"],
			shift: ["0x36", "0x2a"],
		};

		const modeData: FunctionalLayoutModeData = {
			mapping: {},
			modifiers: [],
			includes: "default",
		};

		if (modifiersStr) {
			for (const modifierStr of modifiersStr.split(" ")) {
				let modifiers = new Array<string[]>([]);
				for (let part of modifierStr.split("+")) {
					let optional = false;
					if (part.endsWith("?")) {
						optional = true;
						part = part.substr(0, part.length - 1);
					}
					const codes = map[part];
					if (!codes) {
						throw new Error(`${part} not known.`);
					}

					const newModifiers = new Array<string[]>();
					for (const m of modifiers) {
						for (const p of codes) {
							const i = m.slice();
							i.push(p);
							newModifiers.push(i);
						}
						if (optional) {
							const i = m.slice();
							newModifiers.push(i);
						}
					}
					modifiers = newModifiers;
				}
				modeData.modifiers.push(...modifiers);
			}
		} else {
			modeData.modifiers.push([]);
		}

		for (const mapping of mode.map) {
			const iso = mapping.$.iso;
			let to = mapping.$.to;

			const r = /\\u\{(..)\}/.exec(to);
			if (r) {
				to = JSON.parse(`"\\u00${r[1]}"`);
			}

			const scanCode = table[iso];
			const mod1To = data.modes["mod1"]
				? data.modes["mod1"].mapping[scanCode].text
				: to;
			modeData.mapping[scanCode] = {
				text: to,
				virtualKey: mapTextToVirtualKey(mod1To),
			};
		}
		data.modes["mod" + idx++] = modeData;
	}

	writeFileSync("./layouts/de.json", JSON.stringify(data));
}

main();
