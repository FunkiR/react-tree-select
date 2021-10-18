import {action} from "@storybook/addon-actions";
import {Meta, Story} from '@storybook/react/types-6-0';
import useTreeSelect from "~/hooks/useTreeSelect";
import React, {ComponentProps, useState} from 'react';
import {generateArrayTree} from "stories/helpers";
import type {Value} from '~/types';

import MultiSelectPlugin from "./MultiSelectPlugin";

const MultiSelect = useTreeSelect(MultiSelectPlugin);

export default {
	title: 'plugins/MultiSelect',
	component: MultiSelect,
	subcomponents: {
		MultiSelect
	}
} as Meta;

const Template: Story<ComponentProps<typeof MultiSelect>> = args => {
	const [values, setValues] = useState<Value[]>([]);

	const handleChange = (event) => {
		action('OnChange')(event);
		setValues(event.values);
	};

	return <MultiSelect {...args} onChange={handleChange} onExpand={action('onExpand')} values={values} />;
};

export const Default = Template.bind({});

Default.args = {
	onExpand: action('onExpand'),
	onSelect: action('onSelect'),
	tree: generateArrayTree(8, 2)
};

