import { AnchorButton, Button, Checkbox, Tag } from "@blueprintjs/core";
import { observer } from "mobx-react";
import * as React from "react";
import { svg as githubSvg } from "simple-icons/icons/github";
import { svg as twitterSvg } from "simple-icons/icons/twitter";
import { FunctionalLayout, PhysicalLayout, Model } from "../Model";
import { KeyBindingSet } from "../Model/keybindings/KeyBindingsProvider";
import { AutoResize, Stretch } from "./AutoResize";
import { KeyboardComponent } from "./KeyboardComponent";
import { Select } from "./Select";

@observer
export class GUI extends React.Component<{ model: Model }, {}> {
	render() {
		const model = this.props.model;
		const headless = model.config.headless;
		return (
			<div className="component-GUI bp3-dark">
				{!headless && (
					<>
						<div
							className="part-Header"
							style={{
								display: "flex",
							}}
						>
							<div className="part-Header-Item">
								<Select<PhysicalLayout>
									value={model.keyboard.physicalLayout}
									values={model.physicalLayoutsProvider.getLayouts()}
									getLabel={v => `${v.name} Keyboard`}
									onChange={e => (model.keyboard.physicalLayout = e)}
								/>
							</div>
							<div className="part-Header-Item">
								<Select<FunctionalLayout>
									value={model.keyboard.functionalLayout}
									values={model.functionalLayoutsProvider.getLayouts()}
									getLabel={v => `${v.name} Layout`}
									onChange={e => model.keyboard.setFunctionalLayout(e)}
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
									onChange={e => (model.preventDefault = e.currentTarget.checked)}
								/>
							</div>

							<Tags model={model} />
							<div className="part-Header-Item" style={{ marginLeft: "auto" }}>
								<AnchorButton
									intent={"primary"}
									href="https://marketplace.visualstudio.com/items?itemName=hediet.key-bindings-viewer"
								>
									Get The VS Code Extension
								</AnchorButton>
							</div>

							<div className="part-Header-Item">
								<AnchorButton
									icon={<SVGImage src={githubSvg} />}
									href="https://github.com/hediet/visual-keyboard"
								>
									Github
								</AnchorButton>
							</div>
							<div className="part-Header-Item" style={{ padding: 0 }}>
								<AnchorButton
									icon={<SVGImage src={twitterSvg} />}
									href="https://twitter.com/intent/follow?screen_name=hediet_dev"
								>
									Twitter
								</AnchorButton>
							</div>
						</div>

						<div className="part-Title">
							<h1>Interactive VS Code Keybindings</h1>
						</div>
					</>
				)}

				<div className="part-Keyboard" style={{ minHeight: 0 }}>
					{this.props.model.initialized && (
						<AutoResize stretch={Stretch.Uniform} alignVertical="top">
							<KeyboardComponent
								model={this.props.model}
								keyboard={this.props.model.keyboard}
							/>
						</AutoResize>
					)}
				</div>
				{headless && (
					<div
						style={{
							position: "absolute",
							top: 0,
							right: 0,
							margin: 10,
						}}
					>
						<Tags
							style={{ border: "1px solid white", borderRadius: "3px" }}
							model={model}
						/>
					</div>
				)}
			</div>
		);
	}
}

function SVGImage(props: { src: string }) {
	return (
		<svg
			width={18}
			height={18}
			fill={"white"}
			dangerouslySetInnerHTML={{
				__html: props.src,
			}}
		/>
	);
}

@observer
class Tags extends React.Component<{ model: Model; style?: React.CSSProperties }> {
	render() {
		return (
			<>
				{this.props.model.activeKeyBindingsPath.map((key, idx) => (
					<div key={idx} className="part-Header-Item" style={{ ...this.props.style }}>
						<Tag
							children={key.toString()}
							large={true}
							intent={"primary"}
							onRemove={() => this.props.model.resetCurrentKeyBindingPath()}
						/>
					</div>
				))}
			</>
		);
	}
}
