import {ComponentType} from "react";
import {Node, OnChangeEvent, OnExpandEvent, OnSelectEvent, Value} from '~/types';

export type Props = {
	className: string,
	name: string,
	isSelected?: (node: Node, value: Value | null) => boolean,
	onChange: (event: OnChangeEvent) => void,
	onExpand: (event: OnExpandEvent) => void,
	onSelect: (event: OnSelectEvent) => void,
	tree: Array<Node>,
	value: Value | null
};

export type SelectComponent = ComponentType<Props>;
