export * from "./VirtualKey";

export class PhysicalKey {
	private static readonly instances = new Map<string, PhysicalKey>();
	public static from(id: string): PhysicalKey {
		let existing = this.instances.get(id);
		if (!existing) {
			existing = new PhysicalKey(id);
			this.instances.set(id, existing);
		}
		return existing;
	}

	private readonly _brand = "PhysicalKey";

	private constructor(public readonly name: string) {}

	public toString() {
		return this.name;
	}
}

export class FunctionSymbol {
	private static readonly instances = new Map<string, FunctionSymbol>();

	public static from(name: string) {
		let existing = this.instances.get(name);
		if (!existing) {
			existing = new FunctionSymbol(name);
			this.instances.set(name, existing);
		}
		return existing;
	}

	private readonly _brand = "FunctionSymbol";

	constructor(public readonly name: string) {}
}
