import * as iohook from "iohook";
import { EventEmitter } from "@hediet/std/events";
import { Subject } from "rxjs";
import * as op from "rxjs/operators";

export class KeyboardHook {
	private readonly keyAction = new EventEmitter<{
		action: "pressed" | "released";
		physicalKey: string;
		keycode: number;
	}>();
	public readonly onKeyAction = this.keyAction.asEvent();

	constructor() {
		iohook.useRawcode(true);

		iohook.on("keydown", data => this.handleEvent(data, "pressed"));
		iohook.on("keyup", data => this.handleEvent(data, "released"));

		iohook.start();

		this.subject
			.pipe(
				op.groupBy(v => v.action),
				// We throttle so that no duplicate keys are reported on windows when using neo.
				op.map(o => (o.key === "pressed" ? o.pipe(op.throttleTime(10)) : o)),
				op.mergeAll()
			)
			.subscribe(v => this.keyAction.emit(v));
	}

	public dispose(): void {
		iohook.stop();
	}

	private readonly subject = new Subject<{
		action: "pressed" | "released";
		physicalKey: string;
		keycode: number;
	}>();

	private handleEvent(data: any, action: "pressed" | "released"): void {
		const keycode: number = data.keycode;
		const physicalKey = map[keycode.toString()];
		this.subject.next({ action, physicalKey, keycode });
		//this.keyAction.emit({ action, physicalKey, keycode });
	}
}

const map: Record<string, string> = {
	"0": "IntlBackslash",
	"1": "Escape",
	"2": "Digit1",
	"3": "Digit2",
	"4": "Digit3",
	"5": "Digit4",
	"6": "Digit5",
	"7": "Digit6",
	"8": "Digit7",
	"9": "Digit8",
	"10": "Digit9",
	"11": "Digit0",
	"12": "Slash",
	"13": "BracketRight",
	"14": "Backspace",
	"15": "Tab",
	"16": "KeyQ",
	"17": "KeyW",
	"18": "KeyE",
	"19": "KeyR",
	"20": "KeyT",
	"21": "KeyZ",
	"22": "KeyU",
	"23": "KeyI",
	"24": "KeyO",
	"25": "KeyP",
	"26": "Minus",
	"27": "Equal",
	"28": "Enter",
	"29": "ControlLeft",
	"3640": "0xE038",
	"30": "KeyA",
	"31": "KeyS",
	"32": "KeyD",
	"33": "KeyF",
	"34": "KeyG",
	"35": "KeyH",
	"36": "KeyJ",
	"37": "KeyK",
	"38": "KeyL",
	"39": "BracketLeft",
	"40": "Quote",
	"41": "Semicolon",
	"42": "ShiftLeft",
	"43": "Backquote",
	"44": "KeyY",
	"45": "KeyX",
	"46": "KeyC",
	"47": "KeyV",
	"48": "KeyB",
	"49": "KeyN",
	"50": "KeyM",
	"51": "Comma",
	"52": "Period",
	"53": "Backslash",
	"54": "ShiftRight",
	"55": "NumpadMultiply",
	"56": "AltLeft",
	"57": "Space",
	"58": "CapsLock",
	"59": "F1",
	"60": "F2",
	"61": "F3",
	"62": "F4",
	"63": "F5",
	"64": "F6",
	"65": "F7",
	"66": "F8",
	"67": "F9",
	"68": "F10",
	"69": "NumLock",
	"74": "NumpadSubtract",
	"78": "NumpadAdd",
	"87": "F11",
	"88": "F12",
	"3612": "NumpadEnter",
	"3613": "ControlRight",
	"3637": "NumpadDivide",
	"3639": "0x46",
	"3653": "Pause",
	"3655": "Numpad7",
	"3657": "Numpad9",
	"3663": "Numpad1",
	"3665": "Numpad3",
	"3666": "Numpad0",
	"3667": "NumpadDecimal",
	"3675": "MetaLeft",
	"57416": "Numpad8",
	"57419": "Numpad4",
	"57420": "Numpad5",
	"57421": "Numpad6",
	"57424": "Numpad2",
	"60999": "Home",
	"61000": "ArrowUp",
	"61001": "PageUp",
	"61003": "ArrowLeft",
	"61005": "ArrowRight",
	"61007": "End",
	"61008": "ArrowDown",
	"61009": "PageDown",
	"61010": "Insert",
	"61011": "Delete",
};
