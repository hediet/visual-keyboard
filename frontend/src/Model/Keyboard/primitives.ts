export * from "./VirtualKey";

export class ScanCode {
	private static readonly instances = new Map<number, ScanCode>();
	public static from(val: number | string): ScanCode {
		if (typeof val === "string") {
			if (val.startsWith("0x")) {
				val = parseInt(val.substr(2), 16);
			} else {
				val = parseInt(val, 10);
			}
		}

		let existing = this.instances.get(val);
		if (!existing) {
			existing = new ScanCode(val);
			this.instances.set(val, existing);
		}
		return existing;
	}

	private readonly _brand = "ScanCode";

	private constructor(public readonly code: number) {}

	public toString() {
		return "0x" + this.code.toString(16);
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
