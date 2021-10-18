import type {Story as StoryType} from "@storybook/react/types-6-0";
import {DEFAULT_COMPONENTS, DEFAULT_GETTERS, DEFAULT_SETTERS, DEFAULT_THEME} from "~/app.constants";
import {SelectProvider} from "~/hooks/useSelect";
import React, {ReactNode} from "react";

const withSelectContext = (Story: StoryType): ReactNode => {
	const value = {
		components: DEFAULT_COMPONENTS,
		getters: DEFAULT_GETTERS,
		setters: DEFAULT_SETTERS,
		theme: DEFAULT_THEME
	};

	return <SelectProvider value={value}><Story /></SelectProvider>;
};

export {
	withSelectContext
};