import {action} from "@storybook/addon-actions";
import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {withSelectContext} from "stories/decorators";
import {generateArrayTree} from "stories/helpers";

import Menu from './Menu';
import type {Props} from './types';

export default {
	decorators: [withSelectContext, Story => <div style={{position: 'relative'}}><Story /></div>],
	title: 'Components/Menu',
	component: Menu
} as Meta;

const Template: Story<Props> = args => (
	<Menu {...args} onExpand={action('onExpand')} onSelect={action('onSelect')} />
);

export const Default = Template.bind({});

Default.args = {
	isSelected: () => false,
	tree: generateArrayTree(),
};

