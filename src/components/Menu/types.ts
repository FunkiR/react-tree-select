import {ComponentType} from "react";
import type {InternalOnExpandEvent,Node} from '~/types';

export type Props = {
	className: string,
	isSelected: (node: Node) => boolean,
	tree: Node[],
	onExpand: (event: InternalOnExpandEvent) => void,
	onSelect: (node: Node) => void
};

export type MenuComponent = ComponentType<Props>;
