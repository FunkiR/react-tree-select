import {DEFAULT_COMPONENTS, DEFAULT_GETTERS, DEFAULT_PROPS, DEFAULT_SETTERS, DEFAULT_THEME} from "app.constants";
import {extendComponents, extendObject, extendTheme} from "helpers";
import {useMemo} from "react";
import {DefaultProps, Props} from '~/types';

/**
 * Returns all props that required for the TreeSelect component to work
 *
 * @param {Partial<Props>} props - any partial props that passed in component
 * @returns {DefaultProps}
 */

const useDefaultProps = (props: Partial<Props> = {} as Partial<Props>): DefaultProps => {
	const {components, getters, setters, theme, ...rest} = props;
	const extendedComponents = useMemo(() => extendComponents(DEFAULT_COMPONENTS, components), [components]);
	const extendedGetters = useMemo(() => extendObject(DEFAULT_GETTERS, getters), [getters]);
	const extendedSetters = useMemo(() => extendObject(DEFAULT_SETTERS, setters), [setters]);
	const [extendedTheme] = useMemo(() => extendTheme(DEFAULT_THEME, theme), [theme]);

	return {
		...DEFAULT_PROPS,
		...rest,
		components: extendedComponents,
		getters: extendedGetters,
		setters: extendedSetters,
		theme: extendedTheme
	};
};

export default useDefaultProps;
