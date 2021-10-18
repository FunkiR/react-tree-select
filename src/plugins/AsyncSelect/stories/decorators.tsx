import type {Story as StoryType} from "@storybook/react/types-6-0";
import {DEFAULT_PROPS} from "~/app.constants";
import {SelectProvider} from "~/hooks/useSelect";
import {applyPlugin} from "~/hooks/useTreeSelect";
import {DEFAULT_PROPS as PLUGIN_DEFAULT_PROPS} from '~/plugins/AsyncSelect/constants';
import React, {ReactNode} from 'react';

const withAsyncSelectContext = (Story: StoryType): ReactNode => {
	const {components, getters, setters, theme: [theme]} = applyPlugin(DEFAULT_PROPS, PLUGIN_DEFAULT_PROPS) as any;

	return (
		<SelectProvider value={{components, getters, setters, theme}}>
			<Story />
		</SelectProvider>
	);
};

export {
	withAsyncSelectContext
};