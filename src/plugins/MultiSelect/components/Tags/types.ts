import {ComponentType} from "react";
import {Value} from "~/types";

export type OnRemove = (index: number) => void;

export type Props<V = Value> = {
	onRemove: OnRemove,
	tagWidth: number,
	values: V[]
};

export type TagsComponent<V = Value> = ComponentType<Props<V>>;
