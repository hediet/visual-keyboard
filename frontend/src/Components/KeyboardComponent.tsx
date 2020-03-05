import { observer } from "mobx-react";
import { Keyboard, Model, MechanicalKeyDef } from "../Model";
import React = require("react");
import { KeyComponent } from "./KeyComponent";

@observer
export class KeyboardComponent extends React.Component<{ keyboard: Keyboard; model: Model }, {}> {
	render() {
		const kbd = this.props.keyboard;
		const l = kbd.mechanicalLayout;
		const f = kbd.functionalLayout;

		function getTag(key: MechanicalKeyDef): string {
			const fn = f.defaultState.getFunction(key.physicalKey);
			if (fn) {
				if (fn.virtualKey) {
					return fn.virtualKey.id;
				}
			}
			return key.id;
		}

		const set = new Set<string>();
		function getId(key: MechanicalKeyDef): string {
			const tag = getTag(key);
			let i = 0;
			while (true) {
				const id = `${tag}${i++}`;
				if (!set.has(id)) {
					set.add(id);
					return id;
				}
			}
		}

		const keys = l.keys;
		const sortedKeys = keys
			.map(key => ({ key, id: getId(key) }))
			.sort((a, b) => a.id.localeCompare(b.id));

		return (
			<div className="component-Keyboard" style={{ width: l.width, height: l.height }}>
				{sortedKeys.map(({ id, key }) => (
					<div
						key={id}
						className="part-Key"
						style={{
							transition: "all 1s",
							left: key.x,
							top: key.y,
							width: key.width,
							height: key.height,
						}}
					>
						<KeyComponent model={this.props.model} keyboard={kbd} keyDef={key} />
					</div>
				))}
			</div>
		);
	}
}
