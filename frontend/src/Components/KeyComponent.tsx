import { observer } from "mobx-react";
import React = require("react");
import { Model, Keyboard, MechanicalKeyDef } from "../Model";
import classNames = require("classnames");
import { AutoResize, Stretch } from "./AutoResize";

@observer
export class KeyComponent extends React.Component<{
	model: Model;
	keyboard: Keyboard;
	keyDef: MechanicalKeyDef;
}> {
	render() {
		const { keyDef, keyboard, model } = this.props;

		const keyFn = keyboard.currentFunctionalLayoutState.getFunction(keyDef.physicalKey);

		let action = undefined;

		if (keyFn && keyFn.virtualKey) {
			const r = model.findKeyBindings(keyFn.virtualKey);
			if (r.bindings.length > 0) {
				action = r.bindings.map(b => b.action.shortName)[0];
			}
			if (r.followingKeyBindings) {
				if (!action) {
					action = "";
				}
				action += " ...";
			}
		}

		let virtualKey;
		let text = "";
		if (keyFn) {
			if (keyFn.virtualKey) {
				text = keyFn.virtualKey.format();
				virtualKey = keyFn.virtualKey.id;
			}
			if (keyFn.text) {
				text = keyFn.text;
			}
		}
		//text = keyDef.scanCode.code.toString();
		/*if (defaultFn && defaultFn.virtualKey) {
			text = defaultFn.virtualKey.name;
		}
		action = getJsCodeFromScanCode(keyDef.scanCode)!;
		*/
		//action = `${virtualKey}, ${keyDef.scanCode.code}`;
		//action = keyDef.scanCode.toString();
		//text = getJsCodeFromScanCode(keyDef.scanCode);
		return (
			<button
				className={classNames(
					"component-Key",
					keyboard.isKeyPressed(keyDef.physicalKey) && "pressed",
					model.activeKey === keyDef.physicalKey && "active",
					virtualKey && `virtualKey-${virtualKey}`
				)}
				onClick={() => keyboard.handleButtonToggle(keyDef.physicalKey)}
			>
				<div className="part-KeyText">{text}</div>
				<div
					className="part-Action"
					style={{
						flex: "1 1 0",
						minHeight: 0,
					}}
				>
					<AutoResize maxZoom={1} stretch={Stretch.Uniform}>
						{action}
					</AutoResize>
				</div>
			</button>
		);
	}
}
