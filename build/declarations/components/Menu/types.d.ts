import { ComponentType } from "react";
import type { InternalOnExpandEvent, Node } from '~/types';
export declare type Props = {
    className: string;
    isSelected: (node: Node) => boolean;
    tree: Node[];
    onExpand: (event: InternalOnExpandEvent) => void;
    onSelect: (node: Node) => void;
};
export declare type MenuComponent = ComponentType<Props>;
