import {ContainerComponent} from "components/Container/types";
import {ApplyPluginReturnType} from "~/hooks/useTreeSelect";
import {Component as BaseComponent, DefaultNode as BaseDefaultArrayNode, Node as ArrayNode,Value} from "~/types";

import {AsyncListComponent} from "./components/AsyncList/types";
import {ButtonComponent} from "./components/Button/types";
import {LoaderComponent} from "./components/Loader/types";
import {NodeComponent} from "./components/Node/types";
import type {Props as SelectProps,SelectComponent} from './components/Select/types';
import type {TreeComponent} from "./components/Tree/types";
import {TreeState as DefaultTreeState} from "./hooks/useTree/types";

export enum Component {
	AsyncList = 'AsyncList',
	Loader = 'Loader',
	ShowMoreButton = 'ShowMoreButton',
}

export type Components = {
	[Component.AsyncList]: AsyncListComponent,
	[Component.Loader]: LoaderComponent,
	[Component.ShowMoreButton]: ButtonComponent,
	[BaseComponent.Node]: NodeComponent,
	[BaseComponent.NodeChildrenContainer]: ContainerComponent,
	[BaseComponent.Select]: SelectComponent,
	[BaseComponent.Tree]: TreeComponent,
};

export type DefaultArrayNode = BaseDefaultArrayNode & {
	hasChildren: boolean
};

export type Theme = {
	Loader: string,
	AsyncListLoader: string,
	ShowMoreButton: string
};

export type TreeState = Record<string, any>;

export type OriginalNodeData = Record<string, unknown>;

export type DefaultAsyncNode = {
	data: OriginalNodeData,
	children: Array<string>,
	error: boolean,
	id: string,
	label: string,
	loading: boolean,
	hasChildren: boolean,
	parent: string | null,
	uploaded: boolean,
	value: string
};

export type AsyncNode = Record<string, unknown>;

export type TreeMap = {
	[id: string]: AsyncNode
};

export type Getters = {
	arrayNode: (node: ArrayNode) => DefaultArrayNode,
	node: (node: AsyncNode) => DefaultAsyncNode,
	tree: (tree: TreeState) => DefaultTreeState,
	valueFromNode: (node: AsyncNode) => Value
};

export type Setters = {
	node: <K extends keyof DefaultAsyncNode, N>(AsyncNode: N, key: K, value: DefaultAsyncNode[K]) => N,
	tree: <K extends keyof TreeState, T>(tree: T, key: K, value: TreeState[K]) => T
};

export type Props = SelectProps & {
	components: Components,
	getters: Getters,
	setters: Setters,
	theme: Theme
};

export type AsyncTreePluginReturnType<P> = ApplyPluginReturnType<P, Props>;
