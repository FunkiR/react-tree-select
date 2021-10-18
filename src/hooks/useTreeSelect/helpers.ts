import {extendComponents, extendObject, extendTheme} from "helpers";
import {AnyProps} from "~/types";

import {ApplyPluginReturnType} from './types';

const applyPlugin = <P extends AnyProps, PP extends AnyProps>(props: P, pluginProps: PP): ApplyPluginReturnType<P, PP> => {
	const {components, getters, setters, theme} = props;
	const {components: pluginComponents, getters: pluginGetters, setters: pluginSetters, theme: pluginTheme} = pluginProps;

	return {
		...props,
		...pluginProps,
		components: extendComponents(components, pluginComponents),
		getters: extendObject(getters, pluginGetters),
		setters: extendObject(setters, pluginSetters),
		theme: extendTheme(theme, pluginTheme)
	};
};

export {
	applyPlugin
};