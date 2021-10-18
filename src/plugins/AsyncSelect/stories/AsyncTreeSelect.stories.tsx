import {action} from "@storybook/addon-actions";
import {Meta, Story} from '@storybook/react/types-6-0';
import useTreeSelect from "~/hooks/useTreeSelect/useTreeSelect";
import AsyncSelect from "~/plugins/AsyncSelect";
import React, {ComponentProps, useState} from 'react';

import {fetchData,genAsyncArrayTree} from "./helpers";

const AsyncTreeSelect = useTreeSelect(AsyncSelect);

export default {
	title: 'Plugins/AsyncSelect',
	component: AsyncTreeSelect
} as Meta;


const Template: Story<ComponentProps<typeof AsyncTreeSelect>> = args => {
	const [value, setValue] = useState(null);
	const onChange = event => {
		action('onChange')(event);
		setValue(event.value);
	};

	const handleFetchWithAction = async event => {
		action('onFetch')(event);
		return await args.onFetch?.(event);
	};

	return (
		<AsyncTreeSelect
			{...args}
			onChange={onChange}
			onFetch={handleFetchWithAction}
			onSelect={action('onSelect')}
			value={value}
		/>
	);
};

export const Default = Template.bind({});

Default.args = {
	onFetch: fetchData,
	tree: genAsyncArrayTree()
};

export const WithoutInitialTree = Template.bind({});

WithoutInitialTree.args = {
	...Default.args,
	tree: undefined
};
