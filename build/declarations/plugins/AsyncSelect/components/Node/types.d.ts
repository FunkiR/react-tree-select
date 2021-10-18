import { Props as BaseProps } from '~/components/Node/types';
import { AsyncNode } from "~/plugins/AsyncSelect/types";
import { ComponentType } from "react";
export declare type Props = BaseProps & {
    onFetch: (node: AsyncNode) => void;
    searchValue: string;
};
export declare type NodeComponent = ComponentType<Props>;
