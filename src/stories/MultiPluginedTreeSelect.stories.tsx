import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react/types-6-0";
import useTreeSelect from "~/hooks/useTreeSelect";
import AsyncSelect from "~/plugins/AsyncSelect";
import {fetchData} from "~/plugins/AsyncSelect/stories/helpers";
import MultiSelect from "~/plugins/MultiSelect";
import React, {ComponentProps, useState} from "react";

const TreeSelect = useTreeSelect(AsyncSelect, MultiSelect);

export default {
	title: 'plugins/MultiPluginedTreeSelect',
	component: TreeSelect
} as Meta;

const Template: Story<ComponentProps<typeof TreeSelect>> = args => {
	const [values, setValues] = useState([]);

	const handleChange = event => {
		action('OnChange')(event);
		setValues(event.values);
	};

	return <TreeSelect {...args} onChange={handleChange} onFetch={fetchData} values={values} />;
};

export const Default = Template.bind({});

Default.args = {
	onExpand: action('onExpand'),
	onSelect: action('onSelect')
};

