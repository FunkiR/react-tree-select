import type { Props as TreeProps } from '~/components/Tree/types';
import type { ReactNode } from 'react';
import type { Node } from "~/types";
export declare type Props = Pick<TreeProps, 'onExpand'> & {
    data: any;
    expanded: boolean;
    found: boolean;
    hasChildren: boolean;
    label: string;
    onClick: (node: Node) => void;
    children: (node: Node) => Array<ReactNode>;
    selected: boolean;
};
