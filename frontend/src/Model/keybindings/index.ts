import { VirtualKey } from "../Keyboard";

export class KeyBinding {
	constructor(
		public readonly keySequence: KeyWithModifiers[],
		public readonly action: Action
	) {}
}

export class Action {
	constructor(
		public readonly name: string,
		public readonly shortName: string
	) {}
}

export class KeyWithModifiers {
	constructor(
		public readonly key: VirtualKey,
		public readonly modifiers: Modifiers
	) {}

	public hash(): string {
		return JSON.stringify({
			modifiers: this.modifiers,
			key: this.key.id,
		});
	}

	public toString() {
		const mods = this.modifiers.toString();
		if (mods !== "") {
			return `${mods}+${this.key.id}`;
		}
		return this.key.id;
	}
}

export class Modifiers {
	constructor(
		public readonly shift: boolean,
		public readonly alt: boolean,
		public readonly ctrl: boolean
	) {}

	toString() {
		const items = new Array<string>();
		if (this.shift) {
			items.push("Shift");
		}
		if (this.alt) {
			items.push("Alt");
		}
		if (this.ctrl) {
			items.push("Ctrl");
		}
		return items.join("+");
	}
}

export interface KeyBindingsResult {
	bindings: KeyBinding[];
	followingKeyBindings: KeyBindings | undefined;
}

export class KeyBindings {
	public static from(bindings: KeyBinding[]): KeyBindings {
		const result = new KeyBindings();
		for (const b of bindings) {
			result.addKeybinding(b);
		}
		return result;
	}

	private readonly map = new Map<string, KeyBindingsResult>();
	public get size(): number {
		return this.map.size;
	}

	private getEntry(b: KeyWithModifiers): KeyBindingsResult {
		let r = this.map.get(b.hash());
		if (!r) {
			r = {
				bindings: [],
				followingKeyBindings: undefined,
			};
			this.map.set(b.hash(), r);
		}
		return r;
	}

	private addKeybinding(
		binding: KeyBinding,
		keySequencePrefixLength: number = 0
	) {
		const k = binding.keySequence[keySequencePrefixLength];
		const r = this.getEntry(k);
		if (binding.keySequence.length === keySequencePrefixLength + 1) {
			r.bindings.push(binding);
		} else {
			if (!r.followingKeyBindings) {
				r.followingKeyBindings = new KeyBindings();
			}
			r.followingKeyBindings.addKeybinding(
				binding,
				keySequencePrefixLength + 1
			);
		}
	}

	findKeyBindings(key: KeyWithModifiers): KeyBindingsResult {
		return this.getEntry(key);
	}
}
