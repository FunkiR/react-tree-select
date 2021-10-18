import { ContainerComponent } from '~/components/Container/types';
import { IconComponent } from "~/components/Icon/types";
import { MenuComponent } from '~/components/Menu/types';
import { ComponentType, FC } from 'react';
import { Props as SearchInputProps } from './components/Input/types';
import { Props as NodeProps } from './components/Node/types';
import { Props as SelectProps, SelectComponent } from './components/Select/types';
import { Props as TreeProps } from './components/Tree/types';
import { Props as ValueProps } from './components/Value/types';
export declare type SpreadObject<O1, O2> = Omit<O1, keyof O2> & O2;
export declare enum Component {
    CaretIcon = "CaretIcon",
    ClearIcon = "ClearIcon",
    CollapsedIcon = "CollapsedIcon",
    ExpandedIcon = "ExpandedIcon",
    Icon = "Icon",
    IndicatorsContainer = "IndicatorsContainer",
    Node = "Node",
    NodeChildrenContainer = "NodeChildrenContainer",
    NodeContainer = "NodeContainer",
    NodeLabel = "NodeLabel",
    NodeLabelContainer = "NodeLabelContainer",
    NodeExpandIconContainer = "NodeExpandIconContainer",
    Menu = "Menu",
    MenuContainer = "MenuContainer",
    SearchInputContainer = "SearchInputContainer",
    SearchIcon = "SearchIcon",
    SearchInput = "SearchInput",
    SelectContainer = "SelectContainer",
    Tree = "Tree",
    TreeContainer = "TreeContainer",
    Select = "Select",
    Value = "Value",
    ValueContainer = "ValueContainer",
    ValueLabel = "ValueLabel"
}
export declare type Components = {
    [Component.CaretIcon]: IconComponent;
    [Component.ClearIcon]: IconComponent;
    [Component.CollapsedIcon]: IconComponent;
    [Component.ExpandedIcon]: IconComponent;
    [Component.Icon]: IconComponent;
    [Component.IndicatorsContainer]: ContainerComponent;
    [Component.Value]: FC<ValueProps>;
    [Component.ValueLabel]: ContainerComponent;
    [Component.Node]: FC<NodeProps>;
    [Component.NodeContainer]: ContainerComponent;
    [Component.NodeChildrenContainer]: ContainerComponent;
    [Component.NodeExpandIconContainer]: ContainerComponent;
    [Component.NodeLabel]: ContainerComponent;
    [Component.NodeLabelContainer]: ContainerComponent;
    [Component.Menu]: MenuComponent;
    [Component.MenuContainer]: ContainerComponent;
    [Component.SelectContainer]: ContainerComponent;
    [Component.SearchInputContainer]: ContainerComponent;
    [Component.SearchIcon]: IconComponent;
    [Component.SearchInput]: FC<SearchInputProps>;
    [Component.Tree]: FC<TreeProps>;
    [Component.TreeContainer]: ContainerComponent;
    [Component.Select]: SelectComponent;
    [Component.ValueContainer]: ContainerComponent;
};
declare type ThemeComponents = Exclude<Component, Component.Select | Component.Value | Component.Menu | Component.Tree | Component.Node>;
export declare type ComponentTheme = {
    [key in ThemeComponents]: string;
};
export declare type ComponentEventTheme = {
    NodeLabel_found: string;
    NodeLabel_selected: string;
};
export declare type DefaultTheme = ComponentTheme & ComponentEventTheme;
export declare type GetClassName = (className: string) => string;
export declare type CustomTheme<T> = {
    [key in keyof Partial<T>]: string | GetClassName;
};
export declare enum ThemeMode {
    EXTEND = "extend",
    REPLACE = "replace"
}
export declare type ThemeOptions = {
    mode: ThemeMode;
    prefix: string;
};
export declare type Theme = Record<string, string>;
export declare type ThemeWithOptions<T = Theme> = [T, Partial<ThemeOptions>];
export declare type Value = Record<string, unknown>;
export declare type DefaultValue = {
    label: string;
    value: string;
};
export declare type OnSelectEvent = {
    name: string;
    node: Node;
};
export declare type InternalOnExpandEvent = {
    node: Node;
    expanded: boolean;
};
export declare type OnExpandEvent = InternalOnExpandEvent & {
    name: string;
};
export declare type OnChangeEvent = {
    name: string;
    value: Value | null;
};
export declare type Node = Record<string, any>;
export declare type DefaultNode = {
    children: Array<Node>;
    label: string;
    value: string;
};
export declare type Getters = {
    node: (node: Node) => DefaultNode;
    value: (value: Value | null) => DefaultValue;
    valueFromNode: (node: Node) => Value;
};
export declare type Setters = Record<string, Function>;
export declare type SelectValue = Value | null;
export declare type AnyProps = Record<string, any>;
export declare type AnyComponents = Record<string, ComponentType<any>>;
export declare type AnyGetters = Record<string, (arg: any) => Record<string, unknown>>;
export declare type Props = SelectProps & {
    components: Components;
    getters: Getters;
    setters: Setters;
    theme: CustomTheme<Theme> | ThemeWithOptions<CustomTheme<Theme>>;
};
export declare type DefaultProps = Omit<Props, 'theme'> & {
    theme: Theme;
};
export declare type PluginComponent<P extends AnyProps> = ComponentType<AnyProps & P & {
    Component: ComponentType<AnyProps>;
}>;
export {};
