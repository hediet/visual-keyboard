import { observer } from "mobx-react";
import * as React from "react";
import { Model, Keyboard, MechanicalKeyDef } from "../Model";
import { Button, MenuItem, HTMLSelect } from "@blueprintjs/core";
import { runInAction } from "mobx";
import classNames = require("classnames");
import { KeyWithModifiers } from "../Model/keybindings";
import { getJsCodeFromScanCode } from "../Model/JsKeycodes";

@observer
export class GUI extends React.Component<{ model: Model }, {}> {
	render() {
		const model = this.props.model;
		return (
			<div>
				<HTMLSelect
					onChange={e => {
						const l = model.mechanicalLayoutsProvider
							.getLayouts()
							.find(l => l.name === e.currentTarget.value);
						console.log(l, e.currentTarget.value);
						if (l) {
							model.keyboard.mechanicalLayout = l;
						}
					}}
				>
					{model.mechanicalLayoutsProvider.getLayouts().map(l => (
						<option>{l.name}</option>
					))}
				</HTMLSelect>
				<KeyboardComponent
					model={this.props.model}
					keyboard={this.props.model.keyboard}
				/>
			</div>
		);
	}
}

@observer
class KeyboardComponent extends React.Component<
	{ keyboard: Keyboard; model: Model },
	{}
> {
	render() {
		const kbd = this.props.keyboard;
		const l = kbd.mechanicalLayout;
		return (
			<div
				className="component-Keyboard"
				style={{ width: l.width, height: l.height }}
			>
				{l.keys.map(k => (
					<div
						key={k.id}
						className="part-Key"
						style={{
							transition: "all 1s",
							left: k.x,
							top: k.y,
							width: k.width,
							height: k.height,
						}}
					>
						<Key
							model={this.props.model}
							keyboard={kbd}
							keyDef={k}
						/>
					</div>
				))}
			</div>
		);
	}
}

@observer
class Key extends React.Component<{
	model: Model;
	keyboard: Keyboard;
	keyDef: MechanicalKeyDef;
}> {
	render() {
		const { keyDef, keyboard, model } = this.props;

		const keyFn = keyboard.currentFunctionalLayoutState.getFunction(
			keyDef.scanCode
		);

		let action = undefined;

		if (keyFn) {
			const r = model.findKeyBindings(keyFn.virtualKey!);
			if (r.bindings.length > 0) {
				action = r.bindings.map(b => b.action.shortName)[0];
			} else if (r.followingKeyBindings) {
				action = "...";
			}
		}

		let text = "";
		if (keyFn) {
			text = keyFn.text ? keyFn.text : keyFn.virtualKey!.format();
		}
		//text = keyDef.scanCode.toString();
		/*if (defaultFn && defaultFn.virtualKey) {
			text = defaultFn.virtualKey.name;
		}
		action = getJsCodeFromScanCode(keyDef.scanCode)!;
*/
		//action = keyDef.scanCode.code;
		//action = keyDef.scanCode.code;
		//action = keyDef.scanCode.toString();
		//text = getJsCodeFromScanCode(keyDef.scanCode);
		return (
			<button
				className={classNames(
					"component-Key",
					keyboard.isKeyPressed(keyDef.scanCode) && "pressed",
					model.activeKey === keyDef.scanCode && "active"
				)}
				onClick={() => keyboard.handleButtonToggle(keyDef.scanCode)}
			>
				<div className="part-KeyText">{text}</div>
				<div className="part-Action">{action}</div>
			</button>
		);
	}
}
