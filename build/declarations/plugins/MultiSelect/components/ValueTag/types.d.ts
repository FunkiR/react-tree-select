import { ComponentType } from "react";
import { Value } from "~/types";
export declare type Props<V = Value> = {
    className?: string;
    index: number;
    onRemove: (index: number) => void;
    value: V;
};
export declare type ValueTagComponent<V = Value> = ComponentType<Props<V>>;
