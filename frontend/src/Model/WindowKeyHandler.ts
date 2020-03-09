import { Model } from "./Model";
import { PhysicalKey } from ".";

export class WindowKeyHandler {
	constructor(model: Model) {
		window.addEventListener("keydown", e => {
			const physicalKey = PhysicalKey.from(e.code);
			model.keyboard.handleKeyPress(physicalKey, "key");
			if (model.preventDefault) {
				e.preventDefault();
			}
			e.stopPropagation();
		});
		window.addEventListener("keyup", e => {
			const physicalKey = PhysicalKey.from(e.code);
			model.keyboard.handleKeyRelease(physicalKey, "key");
			if (model.preventDefault) {
				e.preventDefault();
			}
			e.stopPropagation();
		});
	}
}
