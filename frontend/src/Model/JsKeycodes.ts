import { PhysicalKey } from "./Keyboard/primitives";

const jsKeyCodes: Record<string, string> = {
	AltLeft: "0x38",
	AltRight: "0xe05c",
	ArrowDown: "0xe050",
	ArrowLeft: "0xe04b",
	ArrowRight: "0xe04d",
	ArrowUp: "0xe048",
	Backquote: "0x29",
	Backslash: "0x2b",
	Backspace: "0xe",
	BracketLeft: "0x1a",
	BracketRight: "0x1b",
	CapsLock: "0x3a",
	Comma: "0x33",
	ControlLeft: "0x1d",
	ControlRight: "0xe01d",
	Delete: "0xe053",
	Digit0: "0xb",
	Digit1: "0x2",
	Digit2: "0x3",
	Digit3: "0x4",
	Digit4: "0x5",
	Digit5: "0x6",
	Digit6: "0x7",
	Digit7: "0x8",
	Digit8: "0x9",
	Digit9: "0xa",
	End: "0xe04f",
	Enter: "0x1c",
	Equal: "0xd",
	Escape: "0x1",
	F1: "0x3b",
	F10: "0x44",
	F11: "0x57",
	F12: "0x58",
	F2: "0x3c",
	F3: "0x3d",
	F4: "0x3e",
	F5: "0x3f",
	F6: "0x40",
	F7: "0x41",
	F8: "0x42",
	F9: "0x43",
	Home: "0xe047",
	Insert: "0xe052",
	IntlBackslash: "0x56",
	KeyA: "0x1e",
	KeyB: "0x30",
	KeyC: "0x2e",
	KeyD: "0x20",
	KeyE: "0x12",
	KeyF: "0x21",
	KeyG: "0x22",
	KeyH: "0x23",
	KeyI: "0x17",
	KeyJ: "0x24",
	KeyK: "0x25",
	KeyL: "0x26",
	KeyM: "0x32",
	KeyN: "0x31",
	KeyO: "0x18",
	KeyP: "0x19",
	KeyQ: "0x10",
	KeyR: "0x13",
	KeyS: "0x1f",
	KeyT: "0x14",
	KeyU: "0x16",
	KeyV: "0x2f",
	KeyW: "0x11",
	KeyX: "0x2d",
	KeyY: "0x15",
	KeyZ: "0x2c",
	MetaLeft: "0xe05b",
	Minus: "0xc",
	NumLock: "0x45",
	Numpad0: "0x52",
	Numpad1: "0x4f",
	Numpad2: "0x50",
	Numpad3: "0x51",
	Numpad4: "0x4b",
	Numpad5: "0x4c",
	Numpad6: "0x4d",
	Numpad7: "0x47",
	Numpad8: "0x48",
	Numpad9: "0x49",
	NumpadAdd: "0x4e",
	NumpadDecimal: "0x53",
	NumpadDivide: "0xe035",
	NumpadEnter: "0xe01c",
	NumpadMultiply: "0x37",
	NumpadSubtract: "0x4a",
	PageDown: "0xe051",
	PageUp: "0xe049",
	Pause: "0xe11d",
	Period: "0x34",
	Quote: "0x28",
	Semicolon: "0x27",
	ShiftLeft: "0x2a",
	ShiftRight: "0x36",
	Slash: "0x35",
	Space: "0x39",
	Tab: "0xf",
};

export function getScanCodeFromJsCode(jsKeyCode: string): PhysicalKey | undefined {
	if (!(jsKeyCode in jsKeyCodes)) {
		return undefined;
	}
	return PhysicalKey.from(jsKeyCodes[jsKeyCode]);
}

export function getJsCodeFromScanCode(scanCode: PhysicalKey): string | undefined {
	for (const [name, val] of Object.entries(jsKeyCodes)) {
		if (PhysicalKey.from(val) === scanCode) {
			return name;
		}
	}
	return undefined;
}
