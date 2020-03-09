import { PhysicalKey, FunctionSymbol, VirtualKey } from "./primitives";

export abstract class FunctionalLayout {
	constructor(
		public readonly name: string,
		public readonly defaultState: FunctionalLayoutState
	) {}
}

export abstract class FunctionalLayoutState {
	public abstract getFunction(scanCode: PhysicalKey): KeyFunction | undefined;
	public abstract findScanCodeForFunction(fn: FunctionSymbol): PhysicalKey | undefined;
	//public abstract findScanCodeFor
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
		const modifierKeys = new Set<PhysicalKey>();
		function lookupState(name: string): BaseFunctionalLayoutStateImpl {
			let v = modes.get(name);
			if (!v) {
				v = new BaseFunctionalLayoutStateImpl(name, data.modes[name], lookupState);
				modes.set(name, v);
			}
			return v;
		}

		for (const modeName of Object.keys(data.modes)) {
			const s = lookupState(modeName);
			for (const modifierCombination of s.modifiers) {
				for (const mod of modifierCombination) {
					modifierKeys.add(mod);
				}
			}
		}

		function getState(keys: Set<PhysicalKey>): FunctionalLayoutStateImpl | undefined {
			if ([...keys.values()].some(k => !modifierKeys.has(k))) {
				return undefined;
			}

			let best = undefined;
			let length = -1;
			for (const m of modes.values()) {
				for (const mod of m.modifiers) {
					if (mod.size > length && [...mod.values()].every(v => keys.has(v))) {
						length = mod.size;
						best = new FunctionalLayoutStateImpl(m, keys, getState);
					}
				}
			}
			return best;
		}

		super(data.name, getState(new Set())!);
	}
}

class BaseFunctionalLayoutStateImpl extends FunctionalLayoutState {
	private readonly functions = new Map<PhysicalKey, KeyFunction>();
	public readonly modifiers: ReadonlyArray<ReadonlySet<PhysicalKey>>;

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
			? data.modifiers.map(m => new Set(m.map(k => PhysicalKey.from(k))))
			: [];

		for (const [scanCodeStr, def] of Object.entries(data.mapping)) {
			let f: KeyFunction;

			f = {
				text: def.text,
				virtualKey: def.virtualKey ? VirtualKey.get(def.virtualKey) : undefined,
			};

			this.functions.set(PhysicalKey.from(scanCodeStr), f);
		}
	}

	public getFunction(scanCode: PhysicalKey): KeyFunction | undefined {
		const f = this.functions.get(scanCode);
		return f;
	}

	public findScanCodeForFunction(fn: FunctionSymbol): PhysicalKey | undefined {
		const f = [...this.functions.entries()].find(v => v[1].functionSymbol === fn);
		if (!f) {
			return undefined;
		}
		return f[0];
	}
}

class FunctionalLayoutStateImpl extends FunctionalLayoutState {
	constructor(
		private readonly base: BaseFunctionalLayoutStateImpl,
		private readonly pressedKeys: ReadonlySet<PhysicalKey>,
		private readonly getState: (keys: Set<PhysicalKey>) => FunctionalLayoutStateImpl | undefined
	) {
		super();
	}

	public getFunction(scanCode: PhysicalKey): KeyFunction | undefined {
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

	public findScanCodeForFunction(fn: FunctionSymbol): PhysicalKey | undefined {
		return this.base.findScanCodeForFunction(fn);
	}
}
