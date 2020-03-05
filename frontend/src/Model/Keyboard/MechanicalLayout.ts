import { PhysicalKey } from "./primitives";

export class MechanicalLayout {
	public constructor(
		public readonly name: string,
		public readonly width: number,
		public readonly height: number,
		public readonly keys: readonly MechanicalKeyDef[]
	) {}
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
