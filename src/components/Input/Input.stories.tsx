import {action} from "@storybook/addon-actions";
import {useArgs} from '@storybook/client-api';
import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';

import Input from './Input';
import type {Props} from './types';

export default {
	title: 'Components/Input',
	component: Input
} as Meta;

const Template: Story<Props> = args => {
	const [{value}, updateArgs] = useArgs();
	const onChange = (event) => {
		action('onChange')(event);
		updateArgs({value: event.value});
	};

	return <Input {...args} onChange={onChange} value={value} />;
};

export const Default = Template.bind({});

Default.args = {
	value: ''
};

