import { TreeState } from "~/plugins/AsyncSelect/hooks/useTree/types";
import { AsyncNode, TreeMap } from "~/plugins/AsyncSelect/types";
import { ComponentType } from "react";
import { Node as ArrayNode } from "~/types";
export declare type OnFetch = () => void;
export declare type InternalOnFetchEvent = {
    name: string;
    offset: number;
    parent: AsyncNode | null;
};
export declare type InternalOnFetchReturnType = {
    data: TreeMap | ArrayNode[];
    total: number;
};
export declare type InternalOnFetch = (event: InternalOnFetchEvent) => Promise<InternalOnFetchReturnType>;
declare type InternalProps = {
    external: false;
    onFetch: InternalOnFetch;
    tree: Array<ArrayNode>;
};
export declare type ExternalOnFetchEvent = {
    name: string;
    parent: AsyncNode | null;
};
export declare type ExternalOnFetch = (event: ExternalOnFetchEvent) => any;
declare type ExternalProps = {
    external: true;
    onFetch: ExternalOnFetch;
    tree: TreeState;
};
export declare type Props = (InternalProps | ExternalProps) & {
    name: string;
};
export declare type SelectComponent = ComponentType<Props>;
export {};
