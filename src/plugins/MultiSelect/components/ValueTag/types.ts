import {ComponentType} from "react";
import {Value} from "~/types";

export type Props<V = Value> = {
	className?: string,
	index: number,
	onRemove: (index: number) => void,
	value: V
};

export type ValueTagComponent<V = Value> = ComponentType<Props<V>>;
