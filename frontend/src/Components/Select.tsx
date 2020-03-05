import { observer } from "mobx-react";
import * as React from "react";
import { HTMLSelect } from "@blueprintjs/core";

export class Select<T> extends React.Component<{
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
