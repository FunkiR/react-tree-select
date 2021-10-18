import { ContainerComponent } from 'components/Container/types';
import { IconComponent } from "components/Icon/types";
import { ApplyPluginReturnType } from "~/hooks/useTreeSelect";
import { Component as BaseComponent } from '~/types';
import { MenuComponent } from './components/Menu/types';
import { SelectComponent } from './components/Select/types';
import { Props as SelectProps } from './components/Select/types';
import { SelectContainerComponent } from "./components/SelectContainer/types";
import { TagsComponent } from './components/Tags/types';
import { ValueComponent } from "./components/Value/types";
import { ValueTagComponent } from "./components/ValueTag/types";
export declare enum Component {
    AllTagsContainer = "AllTagsContainer",
    Tag = "Tag",
    TagContent = "TagContent",
    TagContainer = "TagContainer",
    Tags = "Tags",
    TagsContainer = "TagsContainer",
    ValueTag = "ValueTag",
    ValueTagLabel = "ValueTagLabel",
    ValueTagRemoveIcon = "ValueTagRemoveIcon",
    ShowAllTagsTag = "ShowAllTagsTag",
    ShowAllTagsIcon = "ShowAllTagsIcon"
}
export declare type Components = {
    [Component.AllTagsContainer]: ContainerComponent;
    [BaseComponent.Menu]: MenuComponent;
    [Component.Tag]: ContainerComponent;
    [Component.TagContent]: ContainerComponent;
    [Component.TagContainer]: ContainerComponent;
    [Component.Tags]: TagsComponent;
    [Component.TagsContainer]: ContainerComponent;
    [BaseComponent.Select]: SelectComponent;
    [BaseComponent.SelectContainer]: SelectContainerComponent;
    [BaseComponent.Value]: ValueComponent;
    [Component.ValueTag]: ValueTagComponent;
    [Component.ValueTagLabel]: ContainerComponent;
    [Component.ValueTagRemoveIcon]: IconComponent;
    [Component.ShowAllTagsTag]: ContainerComponent;
    [Component.ShowAllTagsIcon]: IconComponent;
};
export declare type Theme = Partial<Record<keyof typeof Component, string>>;
export declare type Props = SelectProps & {
    components: Components;
    theme: Theme;
};
export declare type MultiSelectPluginReturnType<P> = ApplyPluginReturnType<Omit<P, 'isSelected' | 'value'>, Props>;
