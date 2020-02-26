import { ScanCode, FunctionSymbol, VirtualKey } from "./primitives";

export abstract class FunctionalLayout {
	constructor(
		public readonly name: string,
		public readonly defaultState: FunctionalLayoutState
	) {}
}

export abstract class FunctionalLayoutState {
	public abstract getFunction(scanCode: ScanCode): KeyFunction | undefined;
	public abstract findScanCodeForFunction(
		fn: FunctionSymbol
	): ScanCode | undefined;
}

export interface KeyFunction {
	text?: string;
	functionSymbol?: FunctionSymbol;
	virtualKey?: VirtualKey;
	stateAfterKeyPressed?: FunctionalLayoutState;
	stateAfterKeyReleased?: FunctionalLayoutState;
}

export interface FunctionalLayoutData {
	name: string;
	modes: Record<string, FunctionalLayoutModeData>;
}

export interface FunctionalLayoutModeData {
	includes?: string;
	modifiers?: string[][];
	mapping: Record<string, { text?: string; virtualKey?: string }>;
}

export class FunctionalLayoutImpl extends FunctionalLayout {
	constructor(data: FunctionalLayoutData) {
		const modes = new Map<string, BaseFunctionalLayoutStateImpl>();
		function lookupState(name: string): BaseFunctionalLayoutStateImpl {
			let v = modes.get(name);
			if (!v) {
				v = new BaseFunctionalLayoutStateImpl(
					name,
					data.modes[name],
					lookupState
				);
				modes.set(name, v);
			}
			return v;
		}

		for (const modeName of Object.keys(data.modes)) {
			lookupState(modeName);
		}

		function getState(
			keys: Set<ScanCode>
		): FunctionalLayoutStateImpl | undefined {
			let best = undefined;
			let length = -1;
			for (const m of modes.values()) {
				for (const mod of m.modifiers) {
					if (
						mod.size > length &&
						[...mod.values()].every(v => keys.has(v))
					) {
						length = mod.size;
						best = new FunctionalLayoutStateImpl(m, keys, getState);
					}
				}
			}
			return best;
		}

		super("neo", getState(new Set())!);
	}
}

class BaseFunctionalLayoutStateImpl extends FunctionalLayoutState {
	private readonly functions = new Map<ScanCode, KeyFunction>();
	public readonly modifiers: ReadonlyArray<ReadonlySet<ScanCode>>;

	constructor(
		public readonly name: string,
		data: FunctionalLayoutModeData,
		getLayout: (name: string) => BaseFunctionalLayoutStateImpl
	) {
		super();

		if (data.includes) {
			const includes = getLayout(data.includes);
			for (const [k, v] of includes.functions) {
				this.functions.set(k, v);
			}
		}

		this.modifiers = data.modifiers
			? data.modifiers.map(m => new Set(m.map(k => ScanCode.from(k))))
			: [];

		for (const [scanCodeStr, def] of Object.entries(data.mapping)) {
			let f: KeyFunction;

			f = {
				text: def.text,
				virtualKey: def.virtualKey
					? VirtualKey.get(def.virtualKey)
					: undefined,
			};

			this.functions.set(ScanCode.from(scanCodeStr), f);
		}
	}

	public getFunction(scanCode: ScanCode): KeyFunction | undefined {
		const f = this.functions.get(scanCode);
		return f;
	}

	public findScanCodeForFunction(fn: FunctionSymbol): ScanCode | undefined {
		const f = [...this.functions.entries()].find(
			v => v[1].functionSymbol === fn
		);
		if (!f) {
			return undefined;
		}
		return f[0];
	}
}

class FunctionalLayoutStateImpl extends FunctionalLayoutState {
	constructor(
		private readonly base: BaseFunctionalLayoutStateImpl,
		private readonly pressedKeys: ReadonlySet<ScanCode>,
		private readonly getState: (
			keys: Set<ScanCode>
		) => FunctionalLayoutStateImpl | undefined
	) {
		super();
	}

	public getFunction(scanCode: ScanCode): KeyFunction | undefined {
		let f = this.base.getFunction(scanCode);

		const s1 = new Set(this.pressedKeys);
		s1.add(scanCode);
		const stateAfterKeyPressed = this.getState(s1);
		if (stateAfterKeyPressed && f) {
			f.stateAfterKeyPressed = stateAfterKeyPressed;
		}

		const s2 = new Set(this.pressedKeys);
		if (s2.delete(scanCode)) {
			const stateAfterKeyReleased = this.getState(s2);
			if (stateAfterKeyReleased && f) {
				f.stateAfterKeyReleased = stateAfterKeyReleased;
			}
		}

		return f;
	}

	public findScanCodeForFunction(fn: FunctionSymbol): ScanCode | undefined {
		return this.base.findScanCodeForFunction(fn);
	}
}
