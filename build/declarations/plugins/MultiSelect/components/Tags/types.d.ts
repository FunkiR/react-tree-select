import { ComponentType } from "react";
import { Value } from "~/types";
export declare type OnRemove = (index: number) => void;
export declare type Props<V = Value> = {
    onRemove: OnRemove;
    tagWidth: number;
    values: V[];
};
export declare type TagsComponent<V = Value> = ComponentType<Props<V>>;
