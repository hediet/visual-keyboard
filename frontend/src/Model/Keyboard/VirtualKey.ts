export class VirtualKey {
	private static readonly instances = new Map<string, VirtualKey>();

	public static register(options: {
		id: string;
		simpleName?: string;
		alternativeIds?: string[];
	}): VirtualKey {
		const id = options.id.toLowerCase();
		const existing = this.instances.get(id);
		if (existing) {
			throw new Error(`Key with id "${existing.id}" already exists.`);
		}
		const key = new VirtualKey(options.id, options.simpleName);
		this.instances.set(id, key);
		if (options.alternativeIds) {
			for (const a of options.alternativeIds) {
				this.instances.set(a.toLowerCase(), key);
			}
		}
		return key;
	}

	public static get(id: string): VirtualKey {
		const key = this.find(id);
		if (!key) {
			throw new Error(`There is no key with id "${id}".`);
		}
		return key;
	}

	public static find(id: string): VirtualKey | undefined {
		const key = this.instances.get(id.toLowerCase());
		return key;
	}

	private readonly _brand = "VirtualKey";

	private constructor(
		public readonly id: string,
		public readonly simpleName?: string
	) {}

	format(): string {
		if (this.simpleName) {
			return this.simpleName;
		}
		return this.id;
	}
}

export const KnownVirtualKeys = {
	ShiftR: VirtualKey.register({ id: "ShiftR", simpleName: "Shift" }),
	ShiftL: VirtualKey.register({ id: "ShiftL", simpleName: "Shift" }),
	F1: VirtualKey.register({ id: "F1" }),
	F2: VirtualKey.register({ id: "F2" }),
	F3: VirtualKey.register({ id: "F3" }),
	F4: VirtualKey.register({ id: "F4" }),
	F5: VirtualKey.register({ id: "F5" }),
	F6: VirtualKey.register({ id: "F6" }),
	F7: VirtualKey.register({ id: "F7" }),
	F8: VirtualKey.register({ id: "F8" }),
	F9: VirtualKey.register({ id: "F9" }),
	F10: VirtualKey.register({ id: "F10" }),
	F11: VirtualKey.register({ id: "F11" }),
	F12: VirtualKey.register({ id: "F12" }),
	Escape: VirtualKey.register({ id: "Escape" }),
	CtrlL: VirtualKey.register({ id: "CtrlL", simpleName: "Ctrl" }),
	CtrlR: VirtualKey.register({ id: "CtrlR", simpleName: "Ctrl" }),
	Return: VirtualKey.register({ id: "Return", alternativeIds: ["Enter"] }),
	Tab: VirtualKey.register({ id: "Tab" }),
	BackSpace: VirtualKey.register({ id: "Backspace" }),
	MetaL: VirtualKey.register({
		id: "MetaL",
		simpleName: "Meta",
		alternativeIds: ["win"],
	}),
	MetaR: VirtualKey.register({ id: "MetaR", simpleName: "Meta" }),
	Apps: VirtualKey.register({ id: "Apps" }),
	Caps: VirtualKey.register({ id: "Caps" }),
	AltL: VirtualKey.register({ id: "AltL", simpleName: "Alt" }),
	AltR: VirtualKey.register({ id: "AltR", simpleName: "Alt Gr" }),
	Up: VirtualKey.register({ id: "Up" }),
	Left: VirtualKey.register({ id: "Left" }),
	Down: VirtualKey.register({ id: "Down" }),
	Right: VirtualKey.register({ id: "Right" }),
	Insert: VirtualKey.register({ id: "Insert" }),
	Home: VirtualKey.register({ id: "Home" }),
	End: VirtualKey.register({ id: "End" }),
	Prior: VirtualKey.register({ id: "Prior", alternativeIds: ["PageUp"] }),
	Next: VirtualKey.register({ id: "Next", alternativeIds: ["PageDown"] }),
	Delete: VirtualKey.register({ id: "Delete" }),
	Pause: VirtualKey.register({ id: "Pause" }),

	Key1: VirtualKey.register({ id: "1" }),
	Key2: VirtualKey.register({ id: "2" }),
	Key3: VirtualKey.register({ id: "3" }),
	Key4: VirtualKey.register({ id: "4" }),
	Key5: VirtualKey.register({ id: "5" }),
	Key6: VirtualKey.register({ id: "6" }),
	Key7: VirtualKey.register({ id: "7" }),
	Key8: VirtualKey.register({ id: "8" }),
	Key9: VirtualKey.register({ id: "9" }),
	Key0: VirtualKey.register({ id: "0" }),
	KeyA: VirtualKey.register({ id: "A" }),
	KeyB: VirtualKey.register({ id: "B" }),
	KeyC: VirtualKey.register({ id: "C" }),
	KeyD: VirtualKey.register({ id: "D" }),
	KeyE: VirtualKey.register({ id: "E" }),
	KeyF: VirtualKey.register({ id: "F" }),
	KeyG: VirtualKey.register({ id: "G" }),
	KeyH: VirtualKey.register({ id: "H" }),
	KeyI: VirtualKey.register({ id: "I" }),
	KeyJ: VirtualKey.register({ id: "J" }),
	KeyK: VirtualKey.register({ id: "K" }),
	KeyL: VirtualKey.register({ id: "L" }),
	KeyM: VirtualKey.register({ id: "M" }),
	KeyN: VirtualKey.register({ id: "N" }),
	KeyO: VirtualKey.register({ id: "O" }),
	KeyP: VirtualKey.register({ id: "P" }),
	KeyQ: VirtualKey.register({ id: "Q" }),
	KeyR: VirtualKey.register({ id: "R" }),
	KeyS: VirtualKey.register({ id: "S" }),
	KeyT: VirtualKey.register({ id: "T" }),
	KeyU: VirtualKey.register({ id: "U" }),
	KeyV: VirtualKey.register({ id: "V" }),
	KeyW: VirtualKey.register({ id: "W" }),
	KeyX: VirtualKey.register({ id: "X" }),
	KeyY: VirtualKey.register({ id: "Y" }),
	KeyZ: VirtualKey.register({ id: "Z" }),

	Oem1: VirtualKey.register({ id: "Oem1" }),
	Oem102: VirtualKey.register({ id: "Oem102" }),
	Oem2: VirtualKey.register({ id: "Oem2" }),
	Oem3: VirtualKey.register({ id: "Oem3" }),
	Oem5: VirtualKey.register({ id: "Oem5" }),
	Oem6: VirtualKey.register({ id: "Oem6" }),
	Oem7: VirtualKey.register({ id: "Oem7" }),
	OemComma: VirtualKey.register({ id: "OemComma" }),
	OemMinus: VirtualKey.register({ id: "OemMinus" }),
	OemPeriod: VirtualKey.register({ id: "OemPeriod" }),
	OemPlus: VirtualKey.register({ id: "OemPlus" }),
	Oem4: VirtualKey.register({ id: "Oem4" }),
	Space: VirtualKey.register({ id: "Space" }),

	NumLock: VirtualKey.register({ id: "NumLock" }),
	NumDiv: VirtualKey.register({ id: "NumDiv" }),
	NumMul: VirtualKey.register({
		id: "NumMul",
		alternativeIds: ["NumpadMultiply"],
	}),
	NumSub: VirtualKey.register({
		id: "NumSub",
		alternativeIds: ["NumpadSubtract"],
	}),
	NumAdd: VirtualKey.register({
		id: "NumAdd",
		alternativeIds: ["NumpadAdd"],
	}),
	NumEnter: VirtualKey.register({ id: "NumEnter" }),
	NumDec: VirtualKey.register({ id: "NumDec" }),
	Num1: VirtualKey.register({ id: "Num1", alternativeIds: ["Numpad1"] }),
	Num2: VirtualKey.register({ id: "Num2", alternativeIds: ["Numpad2"] }),
	Num3: VirtualKey.register({ id: "Num3", alternativeIds: ["Numpad3"] }),
	Num4: VirtualKey.register({ id: "Num4", alternativeIds: ["Numpad4"] }),
	Num5: VirtualKey.register({ id: "Num5", alternativeIds: ["Numpad5"] }),
	Num6: VirtualKey.register({ id: "Num6", alternativeIds: ["Numpad6"] }),
	Num7: VirtualKey.register({ id: "Num7", alternativeIds: ["Numpad7"] }),
	Num8: VirtualKey.register({ id: "Num8", alternativeIds: ["Numpad8"] }),
	Num9: VirtualKey.register({ id: "Num9", alternativeIds: ["Numpad9"] }),
	Num0: VirtualKey.register({ id: "Num0", alternativeIds: ["Numpad0"] }),
};
