import {Props as BaseProps} from '~/components/Node/types';
import {AsyncNode} from "~/plugins/AsyncSelect/types";
import {ComponentType} from "react";

export type Props = BaseProps & {
	onFetch: (node: AsyncNode) => void,
	searchValue: string
};

export type NodeComponent = ComponentType<Props>;
