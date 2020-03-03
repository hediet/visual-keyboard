import { Model } from ".";
import { autorun } from "mobx";

export class UrlQueryController {
	constructor(private model: Model) {
		this.update();

		autorun(() => {
			const kbd = model.keyboard;

			const searchParams = new URLSearchParams(window.location.search);

			searchParams.set("mechanicalLayout", kbd.mechanicalLayout.name);
			searchParams.set("functionalLayout", kbd.functionalLayout.name);

			window.history.pushState(
				undefined,
				"",
				"?" + searchParams.toString()
			);
		});
	}

	private update() {
		const kbd = this.model.keyboard;

		const searchParams = new URLSearchParams(window.location.search);

		const mechanicalLayoutName = searchParams.get("mechanicalLayout");
		if (mechanicalLayoutName) {
			const l = this.model.mechanicalLayoutsProvider.findLayout(
				mechanicalLayoutName
			);
			if (l) {
				kbd.mechanicalLayout = l;
			}
		}

		const functionalLayoutName = searchParams.get("functionalLayout");
		if (functionalLayoutName) {
			const l = this.model.functionalLayoutsProvider.findLayout(
				functionalLayoutName
			);
			if (l) {
				kbd.setFunctionalLayout(l);
			}
		}
	}
}
