import { readFileSync, writeFileSync } from "fs";
import { FunctionalLayoutData } from "../src/model/Keyboard/";

const str = readFileSync("./foo.json", { encoding: "utf8" });

const data = JSON.parse(str).Mappings;

const x: FunctionalLayoutData = {
	name: "test",
	modes: {},
};

for (const m of data) {
	const mode = m.Layer;
	const scanCode = m.ScanCode as number;
	const scanCodeHex = scanCode.toString(16);
	const mapsTo = m.MapsTo;

	let l = x.modes[mode];
	if (!l) {
		l = {};
		x.modes[mode] = l;
	}
	l[scanCodeHex] = mapsTo;
}

const outStr = JSON.stringify(x);
writeFileSync("./out-foo.json", outStr);
