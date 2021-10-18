import {faCaretDown, faMinusSquare, faPlusSquare,faSearch, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {action} from "@storybook/addon-actions";
import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {withSelectContext} from "stories/decorators";

import Icon from './Icon';
import type {Props} from './types';

const icons = {faCaretDown, faSearch, faTimesCircle, faMinusSquare, faPlusSquare};

export default {
	title: 'Components/Icon',
	component: Icon,
	decorators: [withSelectContext],
	argTypes: {
		icon: {
			control: {
				type: 'select',
				options: icons
			}
		}
	},
} as Meta;

const Template: Story<Props> = args => <Icon {...args} onClick={action('onClick')} />;

export const Default = Template.bind({});

Default.args = {
	icon: icons.faCaretDown
};

