import { PhysicalKey } from "./primitives";

export class MechanicalLayout {
	public constructor(
		public readonly name: string,
		public readonly width: number,
		public readonly height: number,
		public readonly keys: readonly MechanicalKeyDef[]
	) {}

	public get keysSortedByPosition(): MechanicalKeyDef[] {
		return this.keys.slice().sort((a, b) => {
			if (a.y !== b.y) {
				return a.y - b.y;
			}
			if (a.x !== b.x) {
				return a.x - b.x;
			}
			return 0;
		});
	}
}

export class MechanicalKeyDef {
	constructor(
		public readonly id: string,
		public readonly x: number,
		public readonly y: number,
		public readonly width: number,
		public readonly height: number,
		public readonly physicalKey: PhysicalKey
	) {}
}
