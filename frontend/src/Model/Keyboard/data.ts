import def = require("../../../data/mechanical-layouts/iso.json");
import { ScanCode } from "./primitives";
import { MechanicalLayout, MechanicalKeyDef } from "./MechanicalLayout";

export function getMechanicalKeyboardLayout() {
	const d = def as MechanicalLayoutData;
	return new MechanicalLayout(
		"test",
		d.width,
		d.height,
		d.keys.map((k, idx) => {
			const scanCode = ScanCode.from(k.scanCode);
			return new MechanicalKeyDef(
				scanCode.toString() + idx,
				k.x,
				k.y,
				k.width,
				k.height,
				scanCode
			);
		})
	);
}

export interface MechanicalLayoutData {
	name: string;
	width: number;
	height: number;
	keys: MechanicalKeyDefData[];
}

export interface MechanicalKeyDefData {
	x: number;
	y: number;
	width: number;
	height: number;

	// hex, uppercase
	scanCode: string;
}
