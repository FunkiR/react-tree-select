import React from 'react';
import { PluginComponent } from "~/types";
import type { Props } from './types';
export declare const Node: PluginComponent<Props>;
declare const _default: React.NamedExoticComponent<import("~/types").AnyProps & Pick<import("../../../../components/Tree/types").Props, "onExpand"> & {
    data: any;
    expanded: boolean;
    found: boolean;
    hasChildren: boolean;
    label: string;
    onClick: (node: import("~/types").Node) => void;
    children: (node: import("~/types").Node) => React.ReactNode[];
    selected: boolean;
} & {
    onFetch: (node: import("../../types").AsyncNode) => void;
    searchValue: string;
} & {
    Component: React.ComponentType<import("~/types").AnyProps>;
}>;
export default _default;
