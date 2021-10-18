import {Meta, Story} from '@storybook/react/types-6-0';
import {withAsyncSelectContext} from "~/plugins/AsyncSelect/stories/decorators";
import React from 'react';

import Loader from './Loader';
import type {Props} from './types';

export default {
	decorators: [withAsyncSelectContext],
	title: 'plugins/AsyncSelect/Components/Loader',
	component: Loader
} as Meta;

const Template: Story<Props> = args => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
	size: 25
};

