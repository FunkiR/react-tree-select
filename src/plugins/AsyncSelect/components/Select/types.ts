import {TreeState} from "~/plugins/AsyncSelect/hooks/useTree/types";
import {AsyncNode, TreeMap} from "~/plugins/AsyncSelect/types";
import {ComponentType} from "react";
import {Node as ArrayNode} from "~/types";

export type OnFetch = () => void;

export type InternalOnFetchEvent = {
	name: string,
	offset: number,
	parent: AsyncNode | null,
};

export type InternalOnFetchReturnType = {
	data: TreeMap | ArrayNode[],
	total: number
};

export type InternalOnFetch = (event: InternalOnFetchEvent) => Promise<InternalOnFetchReturnType>;

type InternalProps = {
	external: false,
	onFetch: InternalOnFetch,
	tree: Array<ArrayNode>
};

export type ExternalOnFetchEvent = {
	name: string,
	parent: AsyncNode | null,
};

export type ExternalOnFetch = (event: ExternalOnFetchEvent) => any;

type ExternalProps = {
	external: true,
	onFetch: ExternalOnFetch,
	tree: TreeState
};

export type Props = (InternalProps | ExternalProps) & {
	name: string
};

export type SelectComponent = ComponentType<Props>;


