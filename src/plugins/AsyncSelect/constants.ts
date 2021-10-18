import {noop} from "~/helpers";
import {Setters} from "~/plugins/AsyncSelect/types";

import AsyncList from "./components/AsyncList";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Node from "./components/Node";
import NodeChildrenContainer from "./components/NodeChildrenContainer";
import Select from "./components/Select";
import Tree from "./components/Tree";
import {TreeState} from "./hooks/useTree/types";
import theme from './styles/themes/default.scss';
import {Components, DefaultArrayNode, DefaultAsyncNode, Getters, Props, Theme} from "./types";

const DEFAULT_GETTERS: Getters = {
	arrayNode: (node: DefaultArrayNode) => node,
	node: (node: DefaultAsyncNode) => node,
	tree: (tree: TreeState) => tree,
	valueFromNode: ({data: {label, value}}: DefaultAsyncNode) => ({label, value})
};

const DEFAULT_SETTERS: Setters = {
	node: (node, key, value) => ({...node, [key]: value}),
	tree: (tree, key, value) => ({...tree, [key]: value})
};

const DEFAULT_COMPONENTS: Components = {
	AsyncList,
	Loader,
	Node,
	NodeChildrenContainer,
	Select,
	ShowMoreButton: Button,
	Tree
};

const DEFAULT_THEME: Theme = theme;

const DEFAULT_PROPS: Props = {
	external: false,
	getters: DEFAULT_GETTERS,
	components: DEFAULT_COMPONENTS,
	onFetch: noop,
	name: '',
	setters: DEFAULT_SETTERS,
	theme: DEFAULT_THEME,
	tree: []
};

export {
	DEFAULT_COMPONENTS,
	DEFAULT_GETTERS,
	DEFAULT_PROPS,
	DEFAULT_SETTERS,
	DEFAULT_THEME
};