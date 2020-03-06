import { KeyBinding, Action, KeyWithModifiers, Modifiers } from ".";
import { bindings as winBindings } from "./vscode-data/win";
import { bindings as macBindings } from "./vscode-data/mac";
import { VirtualKey, UsQwertyLayout } from "..";

export class KeyBindingsProvider {
	private readonly keyBindingSets = [
		new KeyBindingSet("VS Code", "win", getVsCodeBindings(winBindings)),
		new KeyBindingSet("VS Code", "mac", getVsCodeBindings(macBindings)),
	];

	getKeyBindingSets(): KeyBindingSet[] {
		return this.keyBindingSets;
	}

	findKeyBindingSet(id: string): KeyBindingSet | undefined {
		return this.keyBindingSets.find(s => s.id === id);
	}
}

export class KeyBindingSet {
	constructor(
		public readonly applicationName: string,
		public readonly os: "win" | "mac" | "linux",
		public readonly keyBindings: KeyBinding[]
	) {}

	public get id(): string {
		return `${this.applicationName}-${this.os}`;
	}

	public get osName(): string {
		if (this.os === "win") {
			return "Windows";
		} else if (this.os == "linux") {
			return "Linux";
		} else if (this.os === "mac") {
			return "Mac";
		}
		return this.os;
	}
}

function getVsCodeBindings(
	bindings: {
		key: string;
		command: string;
		when?: string;
	}[]
): KeyBinding[] {
	return bindings
		.map(b => {
			const key = b.key.toLowerCase();
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
	let meta = false;
	let main: VirtualKey | undefined;

	for (const part of parts) {
		if (part === "ctrl") {
			ctrl = true;
		} else if (part === "shift") {
			shift = true;
		} else if (part === "alt") {
			alt = true;
		} else if (part === "cmd" || part === "win") {
			meta = true;
		} else {
			main = VirtualKey.find(part.replace(/_/g, ""));

			//UsQwertyLayout.

			if (!main) {
				console.warn(`Virtual Key "${part}" in "${item}" not found.`);
			}
		}
	}
	if (!main) {
		return undefined;
	}

	return new KeyWithModifiers(main!, new Modifiers(shift, alt, ctrl, meta));
}
