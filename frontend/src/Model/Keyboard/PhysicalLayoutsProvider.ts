import { PhysicalLayout, PhysicalKeyDef } from "./PhysicalLayout";
import { PhysicalKey } from "./primitives";

export class PhysicalLayoutsProvider {
	private layouts: PhysicalLayout[];
	constructor() {
		const context = (require as any).context("../../../data/physical-layouts", true, /\.json/);

		this.layouts = context.keys().map((filename: string) => {
			const content = context(filename);
			return getPhysicalKeyboardLayout(content);
		});
	}

	public findLayout(name: string): PhysicalLayout | undefined {
		return this.layouts.find(l => l.name === name);
	}

	public getLayouts(): PhysicalLayout[] {
		return this.layouts;
	}

	public get defaultLayout(): PhysicalLayout {
		return this.layouts[0];
	}
}

function getPhysicalKeyboardLayout(def: PhysicalLayoutData) {
	return new PhysicalLayout(
		def.name,
		def.width,
		def.height,
		def.keys.map((k, idx) => {
			const physicalKey = PhysicalKey.from(k.physicalKey);
			return new PhysicalKeyDef(
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

export interface PhysicalLayoutData {
	name: string;
	width: number;
	height: number;
	keys: PhysicalKeyDefData[];
}

export interface PhysicalKeyDefData {
	x: number;
	y: number;
	width: number;
	height: number;
	physicalKey: string;
}
