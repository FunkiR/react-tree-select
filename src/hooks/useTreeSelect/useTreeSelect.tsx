import {DEFAULT_PROPS} from "~/app.constants";
import {extendComponents, extendObject, extendTheme} from "~/helpers";
import {SelectProvider} from "~/hooks/useSelect";
import React, {ReactNode, useMemo} from "react";
import type {AnyProps, Theme} from '~/types';

import type {Plugin, PluginProps} from './types';

/**
 * Applies passed plugins and returns Select component with them
 *
 * @param {Plugin[]} plugins - plugins of TreeSelect component
 * @returns {ReactNode}
 */

const useTreeSelect = <Plugins extends Plugin[]>(...plugins: Plugins): (props: Partial<PluginProps<Plugins>>) => JSX.Element => {
	const pluginsProps = plugins.reduce((pluginProps, plugin) => {
		return plugin(pluginProps);
	}, DEFAULT_PROPS as AnyProps) as PluginProps<Plugins>;

	return props => {
		const {
			components: pluginsComponents,
			getters: pluginsGetters,
			setters: pluginsSetters,
			theme: pluginsTheme,
			...selectPluginProps
		} = pluginsProps;
		const {components, getters, setters, theme, ...rest} = props;
		const extendedComponents = useMemo(() => extendComponents(pluginsComponents, components), [components]);
		const extendedGetters = useMemo(() => extendObject(pluginsGetters, getters), [getters]);
		const extendedSetters = useMemo(() => extendObject(pluginsSetters, setters), [setters]);
		const [extendedTheme] = useMemo(() => extendTheme(pluginsTheme, theme), [theme]);
		const {Select} = extendedComponents;

		return (
			<SelectProvider value={{
				components: extendedComponents,
				getters: extendedGetters,
				setters: extendedSetters,
				theme: extendedTheme as Theme
			}}>
				<Select {...selectPluginProps} {...rest} />
			</SelectProvider>
		);
	};
};

export default useTreeSelect;
