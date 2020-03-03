import { observer } from "mobx-react";
import * as React from "react";
import {
	Model,
	Keyboard,
	MechanicalKeyDef,
	MechanicalLayout,
	FunctionalLayout,
} from "../Model";
import {
	Button,
	MenuItem,
	HTMLSelect,
	Tag,
	Icon,
	AnchorButton,
	Checkbox,
} from "@blueprintjs/core";
import classNames = require("classnames");
import { AutoResize, Stretch } from "./AutoResize";
import { svg as githubSvg } from "simple-icons/icons/github";
import { svg as twitterSvg } from "simple-icons/icons/twitter";
import { KeyBindingSet } from "../Model/keybindings/KeyBindingsProvider";
import { getJsCodeFromScanCode } from "../Model/JsKeycodes";

class Select<T> extends React.Component<{
	value: T;
	values: T[];
	getLabel: (val: T) => string;
	onChange: (newVal: T) => void;
}> {
	render() {
		const { value, values, onChange, getLabel } = this.props;
		return (
			<HTMLSelect
				value={values.indexOf(value)}
				onChange={e => {
					const selectedIdx = +e.currentTarget.value;
					const selected = values[selectedIdx];
					onChange(selected);
				}}
			>
				{values.map((l, idx) => (
					<option key={idx} value={idx}>
						{getLabel(l)}
					</option>
				))}
			</HTMLSelect>
		);
	}
}

@observer
export class GUI extends React.Component<{ model: Model }, {}> {
	render() {
		const model = this.props.model;
		return (
			<div className="component-GUI bp3-dark">
				<div
					className="part-Header"
					style={{
						display: "flex",
					}}
				>
					<div className="part-Header-Item">
						<Select<MechanicalLayout>
							value={model.keyboard.mechanicalLayout}
							values={model.mechanicalLayoutsProvider.getLayouts()}
							getLabel={v => `${v.name} Keyboard`}
							onChange={e =>
								(model.keyboard.mechanicalLayout = e)
							}
						/>
					</div>
					<div className="part-Header-Item">
						<Select<FunctionalLayout>
							value={model.keyboard.functionalLayout}
							values={model.functionalLayoutsProvider.getLayouts()}
							getLabel={v => `${v.name} Layout`}
							onChange={e =>
								model.keyboard.setFunctionalLayout(e)
							}
						/>
					</div>
					<div className="part-Header-Item">
						<Select<KeyBindingSet>
							value={model.currentKeyBindingSet}
							values={model.keyBindingsProvider.getKeyBindingSets()}
							getLabel={v => `${v.applicationName} ${v.osName}`}
							onChange={e => model.setCurrentKeyBindingSet(e)}
						/>
					</div>

					<div
						className="part-Header-Item"
						style={{ display: "flex", alignItems: "center" }}
					>
						<Checkbox
							label="Prevent Default Key Action"
							style={{ margin: 0 }}
							checked={model.preventDefault}
							onChange={e =>
								(model.preventDefault = e.currentTarget.checked)
							}
						/>
					</div>

					{model.activeKeyBindingsPath.map((key, idx) => (
						<div key={idx} className="part-Header-Item">
							<Tag
								children={key.toString()}
								large={true}
								intent={"primary"}
								onRemove={() =>
									model.resetCurrentKeyBindingPath()
								}
							/>
						</div>
					))}

					<div
						className="part-Header-Item"
						style={{ marginLeft: "auto" }}
					>
						<Button intent={"primary"}>
							Get The VS Code Extension
						</Button>
					</div>

					<div className="part-Header-Item">
						<AnchorButton
							icon={
								<svg
									width={18}
									height={18}
									fill={"white"}
									dangerouslySetInnerHTML={{
										__html: githubSvg,
									}}
								/>
							}
							href="https://github.com/hediet/visual-keyboard"
						>
							Github
						</AnchorButton>
					</div>
					<div className="part-Header-Item" style={{ padding: 0 }}>
						<AnchorButton
							icon={
								<svg
									width={18}
									height={18}
									fill={"white"}
									dangerouslySetInnerHTML={{
										__html: twitterSvg,
									}}
								/>
							}
							href="https://twitter.com/intent/follow?screen_name=hediet_dev"
						>
							Twitter
						</AnchorButton>
					</div>
				</div>

				<div className="part-Title">
					<h1>Interactive VS Code Keybindings</h1>
				</div>
				<div className="part-Keyboard">
					<AutoResize stretch={Stretch.Uniform} alignVertical="top">
						<KeyboardComponent
							model={this.props.model}
							keyboard={this.props.model.keyboard}
						/>
					</AutoResize>
				</div>
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
		const f = kbd.functionalLayout;

		function getTag(key: MechanicalKeyDef): string {
			const fn = f.defaultState.getFunction(key.scanCode);
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
			<div
				className="component-Keyboard"
				style={{ width: l.width, height: l.height }}
			>
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
						<Key
							model={this.props.model}
							keyboard={kbd}
							keyDef={key}
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
					keyboard.isKeyPressed(keyDef.scanCode) && "pressed",
					model.activeKey === keyDef.scanCode && "active",
					virtualKey && `virtualKey-${virtualKey}`
				)}
				onClick={() => keyboard.handleButtonToggle(keyDef.scanCode)}
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
