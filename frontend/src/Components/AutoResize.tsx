import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

export enum Stretch {
	None = 1,
	Uniform,
	UniformToFill,
	Fill,
}

const actions = new Set<() => void>();
const resizeObserver = new ResizeObserver(() => {
	for (const a of actions) {
		a();
	}
});

class Size {
	constructor(
		public readonly width: number,
		public readonly height: number
	) {}
}

class ElementSizeProvider {
	@observable public size!: Size;

	constructor(private readonly elem: HTMLElement) {
		this.handleResize();
		actions.add(this.handleResize);
		resizeObserver.observe(elem);
	}

	private readonly handleResize = () => {
		this.size = new Size(this.elem.clientWidth, this.elem.clientHeight);
	};

	dispose(): void {
		actions.delete(this.handleResize);
		resizeObserver.unobserve(this.elem);
	}
}

@observer
export class AutoResize extends React.Component<{
	stretch?: Stretch;
	maxZoom?: number;
	alignVertical?: "center" | "top";
}> {
	@observable
	private availableSpace: ElementSizeProvider | undefined;
	@observable
	private contentSpace: ElementSizeProvider | undefined;

	render() {
		const zoom = this.zoom;

		return (
			<div
				ref={this.setAvailableDiv}
				style={{
					width: "100%",
					height: "100%",
					margin: 0,
					padding: 0,
					overflow: "hidden",
				}}
			>
				<div
					style={{
						margin: 0,
						padding: 0,
						transformOrigin: "left 0px 0px",
						transform: `translate(${zoom.dx}px, ${zoom.dy}px) scaleX(${zoom.x}) scaleY(${zoom.y})`,
					}}
				>
					<div
						ref={this.setContentSpaceDiv}
						style={{
							width: "fit-content",
							height: "fit-content",
						}}
					>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}

	componentWillUnmount() {
		if (this.availableSpace) {
			this.availableSpace.dispose();
		}
		if (this.contentSpace) {
			this.contentSpace.dispose();
		}
	}

	@computed.struct
	private get zoom(): { x: number; y: number; dx: number; dy: number } {
		if (!this.availableSpace || !this.contentSpace) {
			return { x: 1, y: 1, dx: 0, dy: 0 };
		}
		const availableSpace = this.availableSpace.size;
		const contentSpace = this.contentSpace.size;

		let zoomX = availableSpace.width / contentSpace.width;
		let zoomY = availableSpace.height / contentSpace.height;

		const maxZoom = this.props.maxZoom || Infinity;

		const stretch = this.props.stretch || Stretch.Uniform;

		if (stretch === Stretch.Uniform) {
			zoomX = zoomY = Math.min(zoomX, zoomY);
		} else if (stretch === Stretch.UniformToFill) {
			zoomX = zoomY = Math.max(zoomX, zoomY);
		}

		if (zoomX > maxZoom) {
			zoomX = maxZoom;
		}
		if (zoomY > maxZoom) {
			zoomY = maxZoom;
		}

		const newContentWidth = contentSpace.width * zoomX;

		const dx = {
			center: (availableSpace.width - newContentWidth) / 2,
		}["center"];

		const newContentHeight = contentSpace.height * zoomY;
		const dy = {
			center: (availableSpace.height - newContentHeight) / 2,
			top: 0,
		}[this.props.alignVertical || "center"];

		return {
			x: zoomX,
			y: zoomY,
			dx,
			dy,
		};
	}

	private readonly setAvailableDiv = (div: HTMLDivElement | null) => {
		if (this.availableSpace) {
			this.availableSpace.dispose();
		}
		if (div) {
			this.availableSpace = new ElementSizeProvider(div);
		} else {
			this.availableSpace = undefined;
		}
	};

	private readonly setContentSpaceDiv = (div: HTMLDivElement | null) => {
		if (this.contentSpace) {
			this.contentSpace.dispose();
		}
		if (div) {
			this.contentSpace = new ElementSizeProvider(div);
		} else {
			this.contentSpace = undefined;
		}
	};
}
