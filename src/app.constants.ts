import Value from "components/Value";
import {
	Component,
	Components,
	DefaultNode,
	DefaultProps,
	DefaultTheme,
	DefaultValue,
	Getters,
	Setters,
} from "./types";

import Container from './components/Container';
import Icon from './components/Icon';
import Input from './components/Input';
import Menu from "./components/Menu";
import Node from './components/Node';
import Select from "./components/Select";
import Tree from './components/Tree';
import {noop} from "./helpers";
import defaultTheme from "./styles/themes/default.scss";

const DEFAULT_COMPONENTS: Components = {
	[Component.CaretIcon]: Icon,
	[Component.ClearIcon]: Icon,
	[Component.CollapsedIcon]: Icon,
	[Component.ExpandedIcon]: Icon,
	[Component.Icon]: Icon,
	[Component.IndicatorsContainer]: Container,
	[Component.ValueLabel]: Container,
	[Component.Node]: Node,
	[Component.NodeChildrenContainer]: Container,
	[Component.NodeContainer]: Container,
	[Component.NodeExpandIconContainer]: Container,
	[Component.NodeLabel]: Container,
	[Component.NodeLabelContainer]: Container,
	[Component.Menu]: Menu,
	[Component.MenuContainer]: Container,
	[Component.Select]: Select,
	[Component.SelectContainer]: Container,
	[Component.SearchInputContainer]: Container,
	[Component.SearchIcon]: Icon,
	[Component.SearchInput]: Input,
	[Component.Tree]: Tree,
	[Component.TreeContainer]: Container,
	[Component.Value]: Value,
	[Component.ValueContainer]: Container
};

const DEFAULT_THEME: DefaultTheme = {
	[Component.CaretIcon]: '',
	[Component.ClearIcon]: defaultTheme.ClearIcon,
	[Component.CollapsedIcon]: defaultTheme.Icon,
	[Component.ExpandedIcon]: defaultTheme.Icon,
	[Component.Icon]: defaultTheme.Icon,
	[Component.IndicatorsContainer]: defaultTheme.IndicatorsContainer,
	[Component.ValueLabel]: defaultTheme.ValueLabel,
	[Component.NodeContainer]: defaultTheme.NodeContainer,
	[Component.NodeChildrenContainer]: defaultTheme.NodeChildrenContainer,
	[Component.NodeExpandIconContainer]: defaultTheme.NodeExpandIconContainer,
	[Component.NodeLabel]: defaultTheme.NodeLabel,
	[Component.NodeLabelContainer]: defaultTheme.NodeLabelContainer,
	[Component.MenuContainer]: defaultTheme.MenuContainer,
	[Component.SelectContainer]: defaultTheme.SelectContainer,
	[Component.SearchInputContainer]: defaultTheme.SearchInputContainer,
	[Component.SearchIcon]: '',
	[Component.SearchInput]: defaultTheme.SearchInput,
	[Component.TreeContainer]: defaultTheme.TreeContainer,
	[Component.ValueContainer]: defaultTheme.ValueContainer,
	NodeLabel_found: defaultTheme.NodeLabel_found,
	NodeLabel_selected: defaultTheme.NodeLabel_selected
};

const DEFAULT_GETTERS: Getters = {
	node: (node: DefaultNode) => node,
	value: (value: DefaultValue) => ({
		label: value?.label ?? '',
		value: value?.value ?? ''
	}),
	valueFromNode: ({label, value}: DefaultNode) => ({label, value})
};

export const DEFAULT_SETTERS: Setters = {};

const DEFAULT_PROPS: DefaultProps = {
	className: "",
	components: DEFAULT_COMPONENTS,
	getters: DEFAULT_GETTERS,
	name: "",
	onChange: noop,
	onExpand: noop,
	onSelect: noop,
	setters: DEFAULT_SETTERS,
	tree: [],
	theme: DEFAULT_THEME,
	value: null
};

export {
	DEFAULT_COMPONENTS,
	DEFAULT_GETTERS,
	DEFAULT_PROPS,
	DEFAULT_THEME
};
