import { ComponentType } from "react";
import { Node, OnChangeEvent, OnExpandEvent, OnSelectEvent, Value } from '~/types';
export declare type Props = {
    className: string;
    name: string;
    isSelected?: (node: Node, value: Value | null) => boolean;
    onChange: (event: OnChangeEvent) => void;
    onExpand: (event: OnExpandEvent) => void;
    onSelect: (event: OnSelectEvent) => void;
    tree: Array<Node>;
    value: Value | null;
};
export declare type SelectComponent = ComponentType<Props>;
