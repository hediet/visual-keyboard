import { PhysicalKey } from "./primitives";

export class PhysicalLayout {
	public constructor(
		public readonly name: string,
		public readonly width: number,
		public readonly height: number,
		public readonly keys: readonly PhysicalKeyDef[]
	) {}

	public get keysSortedByPosition(): PhysicalKeyDef[] {
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

export class PhysicalKeyDef {
	constructor(
		public readonly id: string,
		public readonly x: number,
		public readonly y: number,
		public readonly width: number,
		public readonly height: number,
		public readonly physicalKey: PhysicalKey
	) {}
}
