import { ScanCode } from "./Keyboard/primitives";

const jsKeyCodes: Record<string, string> = {
	Escape: "0x1",
	F1: "0x3b",
	F2: "0x3c",
	F3: "0x3d",
	F4: "0x3e",
	F5: "0x3f",
	F6: "0x40",
	F7: "0x41",
	F8: "0x42",
	F9: "0x43",
	F10: "0x44",
	F11: "0x57",
	F12: "0x58",

	Pause: "0xe11d",
	Backquote: "0x29",

	Digit1: "0x2",
	Digit2: "0x3",
	Digit3: "0x4",
	Digit4: "0x5",
	Digit5: "0x6",
	Digit6: "0x7",
	Digit7: "0x8",
	Digit8: "0x9",
	Digit9: "0xa",
	Digit0: "0xb",
	Minus: "0xc",
	Equal: "0xd",
	Backspace: "0xe",
	Insert: "0xe052",
	Home: "0xe047",
	PageUp: "0xe049",
	NumLock: "0x45",
	NumpadDivide: "0xe035",
	NumpadMultiply: "0x37",
	NumpadSubtract: "0x4a",
	Tab: "0xf",
	KeyQ: "0x10",
	KeyW: "0x11",
	KeyE: "0x12",
	KeyR: "0x13",
	KeyT: "0x14",
	KeyY: "0x15",
	KeyU: "0x16",
	KeyI: "0x17",
	KeyO: "0x18",
	KeyP: "0x19",
	BracketLeft: "0x1a",
	BracketRight: "0x1b",
	Enter: "0x1c",
	Delete: "0xe053",
	End: "0xe04f",
	PageDown: "0xe051",
	Numpad7: "0x47",
	Numpad8: "0x48",
	Numpad9: "0x49",
	NumpadAdd: "0x4e",
	CapsLock: "0x3a",
	KeyA: "0x1e",
	KeyS: "0x1f",
	KeyD: "0x20",
	KeyF: "0x21",
	KeyG: "0x22",
	KeyH: "0x23",
	KeyJ: "0x24",
	KeyK: "0x25",
	KeyL: "0x26",
	Semicolon: "0x27",
	Quote: "0x28",
	Backslash: "0x2b",
	Numpad4: "0x4b",
	Numpad5: "0x4c",
	Numpad6: "0x4d",
	ShiftLeft: "0x2a",
	IntlBackslash: "0x56",
	KeyZ: "0x2c",
	KeyX: "0x2d",
	KeyC: "0x2e",
	KeyV: "0x2f",
	KeyB: "0x30",
	KeyN: "0x31",
	KeyM: "0x32",
	Comma: "0x33",
	Period: "0x34",
	Slash: "0x35",
	ShiftRight: "0x36",
	ArrowUp: "0xe048",
	Numpad1: "0x4f",
	Numpad2: "0x50",
	Numpad3: "0x51",
	NumpadEnter: "0xe01c",
	ControlLeft: "0x1d",
	MetaLeft: "0xe05b",
	AltLeft: "0x38",
	Space: "0x39",
	AltRight: "0xe05c",
	ControlRight: "0xe01d",
	ArrowLeft: "0xe04b",
	ArrowDown: "0xe050",
	ArrowRight: "0xe04d",
	Numpad0: "0x52",
	NumpadDecimal: "0x53",
};

export function getScanCodeFromJsCode(jsKeyCode: string): ScanCode | undefined {
	if (!(jsKeyCode in jsKeyCodes)) {
		return undefined;
	}
	return ScanCode.from(jsKeyCodes[jsKeyCode]);
}

export function getJsCodeFromScanCode(scanCode: ScanCode): string | undefined {
	for (const [name, val] of Object.entries(jsKeyCodes)) {
		if (ScanCode.from(val) === scanCode) {
			return name;
		}
	}
	return undefined;
}
