import { observer } from "mobx-react";
import React = require("react");
import { Model, Keyboard, PhysicalKeyDef } from "../Model";
import classNames = require("classnames");
import { AutoResize, Stretch } from "./AutoResize";
import { autorun, observable, computed } from "mobx";

@observer
export class KeyComponent extends React.Component<{
	model: Model;
	keyboard: Keyboard;
	keyDef: PhysicalKeyDef;
}> {
	//@observable private isPressedDelayed = false;

	@computed get isPressed() {
		return this.props.keyboard.isKeyPressed(this.props.keyDef.physicalKey);
	}

	/*
	TODO find a better way to implement `isPressedDelayed`!

	constructor(props: KeyComponent["props"]) {
		super(props);

		let pressed = new Date();
		autorun(() => {
			if (this.isPressed) {
				this.isPressedDelayed = true;
				pressed = new Date();
			} else {
				let requiredWaitingTime = 700 - (new Date().getTime() - pressed.getTime());

				const keyFn = this.props.keyboard.currentFunctionalLayoutState.getFunction(
					this.props.keyDef.physicalKey
				);
				if (
					keyFn &&
					keyFn.virtualKey &&
					this.props.model.isKeyBindingsModifier(keyFn.virtualKey)
				) {
					// modifiers don't need delays
					requiredWaitingTime = 0;
				}

				setTimeout(() => {
					this.isPressedDelayed = false;
				}, Math.max(0, requiredWaitingTime));
			}
		});
	}*/

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

		return (
			<button
				className={classNames(
					"component-Key",
					this.isPressed && "pressed",
					// model.activeKey === keyDef.physicalKey && "active",
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
