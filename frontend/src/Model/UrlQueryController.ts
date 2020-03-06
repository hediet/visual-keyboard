import { Model } from ".";
import { autorun } from "mobx";

export class UrlQueryController {
	constructor(private model: Model) {
		this.update();

		autorun(() => {
			const kbd = model.keyboard;

			const searchParams = new URLSearchParams(window.location.search);

			searchParams.set("physicalLayout", kbd.physicalLayout.name);
			searchParams.set("functionalLayout", kbd.functionalLayout.name);
			searchParams.set("app", model.currentKeyBindingSet.id);

			window.history.pushState(undefined, "", "?" + searchParams.toString());
		});
	}

	private update() {
		const kbd = this.model.keyboard;

		const searchParams = new URLSearchParams(window.location.search);

		const physicalLayoutName = searchParams.get("physicalLayout");
		if (physicalLayoutName) {
			const l = this.model.physicalLayoutsProvider.findLayout(physicalLayoutName);
			if (l) {
				kbd.physicalLayout = l;
			}
		}

		const functionalLayoutName = searchParams.get("functionalLayout");
		if (functionalLayoutName) {
			const l = this.model.functionalLayoutsProvider.findLayout(functionalLayoutName);
			if (l) {
				kbd.setFunctionalLayout(l);
			}
		}

		const app = searchParams.get("app");
		if (app) {
			const curSet = this.model.keyBindingsProvider.findKeyBindingSet(app);
			if (curSet) {
				this.model.setCurrentKeyBindingSet(curSet);
			}
		}
	}
}
