import { AnchorButton, Button, Checkbox, Tag } from "@blueprintjs/core";
import { observer } from "mobx-react";
import * as React from "react";
import { svg as githubSvg } from "simple-icons/icons/github";
import { svg as twitterSvg } from "simple-icons/icons/twitter";
import { FunctionalLayout, MechanicalLayout, Model } from "../Model";
import { KeyBindingSet } from "../Model/keybindings/KeyBindingsProvider";
import { AutoResize, Stretch } from "./AutoResize";
import { KeyboardComponent } from "./KeyboardComponent";
import { Select } from "./Select";

@observer
export class GUI extends React.Component<{ model: Model }, {}> {
	render() {
		const model = this.props.model;
		const headless = true;
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
								<Select<MechanicalLayout>
									value={model.keyboard.mechanicalLayout}
									values={model.mechanicalLayoutsProvider.getLayouts()}
									getLabel={v => `${v.name} Keyboard`}
									onChange={e => (model.keyboard.mechanicalLayout = e)}
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

							{model.activeKeyBindingsPath.map((key, idx) => (
								<div key={idx} className="part-Header-Item">
									<Tag
										children={key.toString()}
										large={true}
										intent={"primary"}
										onRemove={() => model.resetCurrentKeyBindingPath()}
									/>
								</div>
							))}

							<div className="part-Header-Item" style={{ marginLeft: "auto" }}>
								<Button intent={"primary"}>Get The VS Code Extension</Button>
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
					</>
				)}
				<div className="part-Keyboard" style={{ minHeight: 0 }}>
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
