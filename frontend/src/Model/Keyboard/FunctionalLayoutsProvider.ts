import { FunctionalLayout, FunctionalLayoutImpl } from "./FunctionalLayout";

export class FunctionalLayoutsProvider {
	private layouts: FunctionalLayout[];
	constructor() {
		const context = (require as any).context(
			"../../../data/functional-layouts",
			true,
			/\.json/
		);

		this.layouts = context.keys().map((filename: string) => {
			const content = context(filename);
			return new FunctionalLayoutImpl(content);
		});
	}

	public findLayout(name: string): FunctionalLayout | undefined {
		return this.layouts.find(l => l.name === name);
	}

	getLayouts(): FunctionalLayout[] {
		return this.layouts;
	}

	get defaultLayout(): FunctionalLayout {
		return this.layouts[0];
	}
}
