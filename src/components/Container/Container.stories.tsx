import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';

import Container from './Container';
import type {Props} from './types';

export default {
	title: 'Components/Container',
	component: Container
} as Meta;

const Template: Story<Props> = args => <Container {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'test',
	title: 'test'
};

