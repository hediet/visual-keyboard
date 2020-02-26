import { MechanicalLayout, MechanicalKeyDef } from "./MechanicalLayout";
import { ScanCode } from "./primitives";

export class MechanicalLayoutsProvider {
	private layouts: MechanicalLayout[];
	constructor() {
		const context = (require as any).context(
			"../../../data/mechanical-layouts",
			true,
			/\.json/
		);

		this.layouts = context.keys().map((filename: string) => {
			console.log(filename);
			const content = context(filename);
			return getMechanicalKeyboardLayout(content);
		});
	}

	getLayouts(): MechanicalLayout[] {
		return this.layouts;
	}

	get defaultLayout(): MechanicalLayout {
		return this.layouts[0];
	}
}

function getMechanicalKeyboardLayout(def: MechanicalLayoutData) {
	return new MechanicalLayout(
		def.name,
		def.width,
		def.height,
		def.keys.map((k, idx) => {
			const scanCode = ScanCode.from(k.scanCode);
			return new MechanicalKeyDef(
				scanCode.toString(),
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
