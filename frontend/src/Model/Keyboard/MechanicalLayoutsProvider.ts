import { MechanicalLayout, MechanicalKeyDef } from "./MechanicalLayout";
import { PhysicalKey } from "./primitives";

export class MechanicalLayoutsProvider {
	private layouts: MechanicalLayout[];
	constructor() {
		const context = (require as any).context(
			"../../../data/mechanical-layouts",
			true,
			/\.json/
		);

		this.layouts = context.keys().map((filename: string) => {
			const content = context(filename);
			return getMechanicalKeyboardLayout(content);
		});
	}

	public findLayout(name: string): MechanicalLayout | undefined {
		return this.layouts.find(l => l.name === name);
	}

	public getLayouts(): MechanicalLayout[] {
		return this.layouts;
	}

	public get defaultLayout(): MechanicalLayout {
		return this.layouts[0];
	}
}

function getMechanicalKeyboardLayout(def: MechanicalLayoutData) {
	return new MechanicalLayout(
		def.name,
		def.width,
		def.height,
		def.keys.map((k, idx) => {
			const physicalKey = PhysicalKey.from(k.physicalKey);
			return new MechanicalKeyDef(
				physicalKey.toString(),
				k.x,
				k.y,
				k.width,
				k.height,
				physicalKey
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
	physicalKey: string;
}
