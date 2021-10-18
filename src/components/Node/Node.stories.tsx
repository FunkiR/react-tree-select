import {action} from "@storybook/addon-actions";
import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {withSelectContext} from "stories/decorators";
import {generateArrayTree} from "stories/helpers";

import Node from './Node';
import type {Props} from './types';

export default {
	title: 'Components/Node',
	component: Node,
	decorators: [withSelectContext]
} as Meta;

const Template: Story<Props> = args => <Node {...args}  />;

export const WithoutChildren = Template.bind({});

WithoutChildren.args = {
	data: {
		children: [],
		label: 'label',
		value: 'value'
	},
	onClick: action('onClick'),
	onExpand: action('onExpand'),
	hasChildren: false,
	label: 'label',
	found: false,
	selected: false
};

export const WithChildren = Template.bind({});

WithChildren.args = {
	...WithoutChildren.args,
	data: {
		children: generateArrayTree(5, 1),
		label: 'label',
		value: 'value'
	},
	children: node => node.children.map(child => (
		<Node {...WithoutChildren.args} data={child} key={child.value} label={child.label} />
	)),
	hasChildren: true
};

