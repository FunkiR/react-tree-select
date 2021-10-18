import {DEFAULT_GETTERS} from "app.constants";
import Container from 'components/Container';
import Icon from 'components/Icon';
import {noop} from "helpers";
import {Component as BaseComponent} from 'types';

import Menu from './components/Menu';
import Select from './components/Select';
import SelectContainer from "./components/SelectContainer";
import Tags from './components/Tags';
import Value from './components/Value';
import ValueTag from './components/ValueTag';
import theme from './styles/themes/default.scss';
import {Component, Components, Props, Theme} from "./types";

const DEFAULT_COMPONENTS: Components = {
	[Component.AllTagsContainer]: Container,
	[BaseComponent.Menu]: Menu,
	[Component.Tag]: Container,
	[Component.TagContent]: Container,
	[Component.TagContainer]: Container,
	[Component.Tags]: Tags,
	[Component.TagsContainer]: Container,
	[BaseComponent.Select]: Select,
	[BaseComponent.SelectContainer]: SelectContainer,
	[BaseComponent.Value]: Value,
	[Component.ValueTag]: ValueTag,
	[Component.ValueTagLabel]: Container,
	[Component.ValueTagRemoveIcon]: Icon,
	[Component.ShowAllTagsTag]: Container,
	[Component.ShowAllTagsIcon]: Icon
};

const DEFAULT_THEME: Theme = theme;

const DEFAULT_PROPS: Props = {
	onChange: noop,
	onSelect: noop,
	components: DEFAULT_COMPONENTS,
	isSelected: (node, values) => !!values.find(
		value => DEFAULT_GETTERS.value(value).value === DEFAULT_GETTERS.node(node).value
	),
	name: '',
	theme: DEFAULT_THEME,
	values: []
};

export {
	DEFAULT_COMPONENTS,
	DEFAULT_PROPS,
	DEFAULT_THEME
};
