import { bindings } from "./vscode";
import {
	KeyBindings,
	KeyWithModifiers,
	KeyBinding,
	Modifiers,
	Action,
} from ".";
import { VirtualKey } from "../Keyboard";

export function getVsCodeBindings(): KeyBinding[] {
	return bindings
		.map(b => {
			const key = b.key;
			const seq = key.split(" ");
			const keys = seq.map(s => parseItem(s)!).filter(i => !!i);
			const parts = b.command.split(".");
			const last = camelCaseToCapitalized(parts[parts.length - 1]);
			if (keys.length === 0) {
				return undefined!;
			}
			return new KeyBinding(keys, new Action(b.command, last));
		})
		.filter(b => !!b);
}

export function camelCaseToCapitalized(camelCasedWord: string) {
	return camelCasedWord
		.replace(/[a-z][A-Z]/g, x => x[0] + " " + x[1].toUpperCase())
		.replace(/^./, x => x.toUpperCase());
}

function parseItem(item: string): KeyWithModifiers | undefined {
	const parts = item.split("+");

	let shift = false;
	let ctrl = false;
	let alt = false;
	let main: VirtualKey | undefined;

	for (const part of parts) {
		if (part === "ctrl") {
			ctrl = true;
		} else if (part === "shift") {
			shift = true;
		} else if (part === "alt") {
			alt = true;
		} else {
			main = VirtualKey.find(part.replace(/_/g, ""));
			if (!main) {
				console.warn(`Virtual Key "${part}" not found.`);
			}
		}
	}
	if (!main) {
		return undefined;
	}

	return new KeyWithModifiers(main!, new Modifiers(shift, alt, ctrl));
}
