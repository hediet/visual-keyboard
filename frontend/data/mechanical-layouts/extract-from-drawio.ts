import { readFileSync, writeFileSync } from "fs";
import { MechanicalLayoutData } from "../../src/model/Keyboard/data";

const r = /value="(.*?)".*?\n.*x="(.*?)" y="(.*?)" width="(.*?)" height="(.*?)"/g;
const str = readFileSync("./ansi.drawio.xml", { encoding: "utf8" });

const extractionResults: {
	value: string;
	x: number;
	y: number;
	width: number;
	height: number;
}[] = [];

while (true) {
	const m = r.exec(str);
	if (!m) {
		break;
	}

	const [_, value, xStr, yStr, widthStr, heightStr] = m;

	const x = parseInt(xStr, 10);
	const y = parseInt(yStr, 10);
	const width = parseInt(widthStr, 10);
	const height = parseInt(heightStr, 10);
	extractionResults.push({
		value,
		x,
		y,
		width,
		height,
	});
}

const keyboard = extractionResults.find(r => r.value === "keyboard")!;

const keyboardDef: MechanicalLayoutData = {
	name: "test",
	width: keyboard.width,
	height: keyboard.height,
	keys: [],
};

for (const r of extractionResults) {
	if (r.value === "keyboard") {
		continue;
	}
	keyboardDef.keys.push({
		scanCode: r.value,
		x: r.x - keyboard.x,
		y: r.y - keyboard.y,
		width: r.width,
		height: r.height,
	});
}

const outStr = JSON.stringify(keyboardDef);
writeFileSync("./out.json", outStr);
