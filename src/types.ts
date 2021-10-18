import {ContainerComponent} from '~/components/Container/types';
import {IconComponent} from "~/components/Icon/types";
import {MenuComponent} from '~/components/Menu/types';
import {ComponentType, FC} from 'react';

import {Props as SearchInputProps} from './components/Input/types';
import {Props as NodeProps} from './components/Node/types';
import {Props as SelectProps, SelectComponent} from './components/Select/types';
import {Props as TreeProps} from './components/Tree/types';
import {Props as ValueProps} from './components/Value/types';

export type SpreadObject<O1, O2> = Omit<O1, keyof O2> & O2;

export enum Component {
	CaretIcon = 'CaretIcon',
	ClearIcon = 'ClearIcon',
	CollapsedIcon = 'CollapsedIcon',
	ExpandedIcon = 'ExpandedIcon',
	Icon = 'Icon',
	IndicatorsContainer = 'IndicatorsContainer',
	Node = 'Node',
	NodeChildrenContainer = 'NodeChildrenContainer',
	NodeContainer = 'NodeContainer',
	NodeLabel = 'NodeLabel',
	NodeLabelContainer = 'NodeLabelContainer',
	NodeExpandIconContainer = 'NodeExpandIconContainer',
	Menu = 'Menu',
	MenuContainer = 'MenuContainer',
	SearchInputContainer = 'SearchInputContainer',
	SearchIcon = 'SearchIcon',
	SearchInput = 'SearchInput',
	SelectContainer = 'SelectContainer',
	Tree = 'Tree',
	TreeContainer = 'TreeContainer',
	Select = 'Select',
	Value = 'Value',
	ValueContainer = 'ValueContainer',
	ValueLabel = 'ValueLabel'
}

export type Components = {
	[Component.CaretIcon]: IconComponent,
	[Component.ClearIcon]: IconComponent,
	[Component.CollapsedIcon]: IconComponent,
	[Component.ExpandedIcon]: IconComponent,
	[Component.Icon]: IconComponent,
	[Component.IndicatorsContainer]: ContainerComponent,
	[Component.Value]: FC<ValueProps>,
	[Component.ValueLabel]: ContainerComponent,
	[Component.Node]: FC<NodeProps>,
	[Component.NodeContainer]: ContainerComponent,
	[Component.NodeChildrenContainer]: ContainerComponent,
	[Component.NodeExpandIconContainer]: ContainerComponent,
	[Component.NodeLabel]: ContainerComponent,
	[Component.NodeLabelContainer]: ContainerComponent,
	[Component.Menu]: MenuComponent,
	[Component.MenuContainer]: ContainerComponent,
	[Component.SelectContainer]: ContainerComponent,
	[Component.SearchInputContainer]: ContainerComponent,
	[Component.SearchIcon]: IconComponent,
	[Component.SearchInput]: FC<SearchInputProps>,
	[Component.Tree]: FC<TreeProps>,
	[Component.TreeContainer]: ContainerComponent,
	[Component.Select]: SelectComponent,
	[Component.ValueContainer]: ContainerComponent
};

// theme types
type ThemeComponents = Exclude<Component, Component.Select | Component.Value | Component.Menu | Component.Tree | Component.Node>;

export type ComponentTheme = {
	[key in ThemeComponents]: string
};

export type ComponentEventTheme = {
	NodeLabel_found: string,
	NodeLabel_selected: string
};

export type DefaultTheme = ComponentTheme & ComponentEventTheme;

export type GetClassName = (className: string) => string;

export type CustomTheme<T> = {
	[key in keyof Partial<T>]: string | GetClassName;
};

export enum ThemeMode {
	EXTEND = 'extend',
	REPLACE = 'replace'
}

export type ThemeOptions = {
	mode: ThemeMode,
	prefix: string
};

export type Theme = Record<string, string>;

export type ThemeWithOptions<T = Theme> = [T, Partial<ThemeOptions>];
// end theme types

// Value

export type Value = Record<string, unknown>;

export type DefaultValue = {
	label: string,
	value: string
};

// Events
export type OnSelectEvent = {
	name: string,
	node: Node
};

export type InternalOnExpandEvent = {
	node: Node,
	expanded: boolean
};

export type OnExpandEvent = InternalOnExpandEvent & {
	name: string
};

export type OnChangeEvent = {
	name: string,
	value: Value | null
};

// End events

export type Node = Record<string, any>;

export type DefaultNode = {
	children: Array<Node>,
	label: string,
	value: string
};

export type Getters = {
	node: (node: Node) => DefaultNode,
	value: (value: Value | null) => DefaultValue,
	valueFromNode: (node: Node) => Value
};

export type Setters = Record<string, Function>;

export type SelectValue = Value | null;

export type AnyProps = Record<string, any>;

export type AnyComponents = Record<string, ComponentType<any>>;

export type AnyGetters = Record<string, (arg: any) => Record<string, unknown>>;

export type Props = SelectProps & {
	components: Components,
	getters: Getters,
	setters: Setters,
	theme: CustomTheme<Theme> | ThemeWithOptions<CustomTheme<Theme>>
};

export type DefaultProps = Omit<Props, 'theme'> & {
	theme: Theme
};

export type PluginComponent<P extends AnyProps> = ComponentType<AnyProps & P & {
	Component: ComponentType<AnyProps>
}>;
