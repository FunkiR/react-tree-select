import {action} from "@storybook/addon-actions";
import {Meta, Story} from '@storybook/react/types-6-0';
import React, {useState} from 'react';
import TreeSelect from 'TreeSelect';
import type {Props, SelectValue} from '~/types';

import {generateArrayTree} from "./helpers";

export default {
	title: 'TreeSelect',
	component: TreeSelect
} as Meta;

const Template: Story<Props> = args => {
	const [value, setValue] = useState<SelectValue>(null);

	const handleChange = event => {
		action('OnChange')(event);
		setValue(event.value);
	};

	return <TreeSelect {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});

Default.args = {
	onExpand: action('onExpand'),
	onSelect: action('onSelect'),
	tree: generateArrayTree(3, 2)
};

