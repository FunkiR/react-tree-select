import cn from 'classnames';

import withOriginalComponent from "./HOCs/withOriginalComponent";
import {AnyComponents, CustomTheme, SpreadObject, Theme, ThemeMode, ThemeOptions, ThemeWithOptions} from "./types";

/**
 * HOC to prevent frequent calls to passed function
 *
 * @template T
 *
 * @param {T} f - target function
 * @param {number} ms - time limit for repeat call check
 * @returns {T} - decorator with re-invocation check
 */
const debounce = <T extends Function>(f: T, ms: number): T => {
	let timer: NodeJS.Timeout;

	const callable = (...args) => {
		timer && clearTimeout(timer);

		timer = setTimeout(() => f(...args), ms);
	};

	return <T>(<any>callable);
};

/**
 * Used to check if a string contains a passed substring
 *
 * @param {string} string - string that will be searched for
 * @param {string} substring - substring to search
 * @returns {boolean} - result of check
 */
const hasSubstring = (string: string, substring?: string | number): boolean => {
	let searchValue = substring;

	if (Number.isInteger(searchValue)) searchValue = searchValue?.toString();

	return Boolean(searchValue && string.search(searchValue.toString()) != -1);
};

/**
 * Used as mock or default prop
 *
 * @returns {void} - empty result
 */
const noop = (): any => undefined;

/**
 * Extends theme by replacing or adding new selectors. Also changes theme settings if they were passed
 *
 * @template T, NT, RT
 *
 * @param {T | CustomTheme<T> | ThemeWithOptions<T>} data - data of base theme
 * @param {NT | CustomTheme<NT> |ThemeWithOptions<NT> | void} newData - data to extend base theme
 * @returns {ThemeWithOptions<RT>} - data of new theme with applied changes
 */
const extendTheme = <T extends Theme>(
	data: T | ThemeWithOptions<T>,
	newData?: CustomTheme<T> | ThemeWithOptions<CustomTheme<T> | null>
): ThemeWithOptions<T> => {
	const getThemeWithOptions = <T>(data?: T | CustomTheme<T> | ThemeWithOptions<T | null>, defaultOptions?: Partial<ThemeOptions>): ThemeWithOptions<T> => {
		let options: Partial<ThemeOptions> = {
			mode: ThemeMode.REPLACE
		};
		let theme;

		if (Array.isArray(data)) {
			[theme, options] = data;
		} else if (data) theme = data;

		return [theme, {...defaultOptions, ...options}];
	};

	const [defaultTheme, defaultOptions] = getThemeWithOptions<T>(data);
	const [customTheme, customOptions] = getThemeWithOptions<CustomTheme<T>>(newData, defaultOptions);
	const {mode: themeMode = ThemeMode.REPLACE, prefix} = customOptions;
	let theme = defaultTheme;

	const getCNByMode = (className: string, newClassName: string, mode: ThemeMode): string => {
		return mode === ThemeMode.EXTEND ? cn(className, newClassName) : newClassName;
	};

	const getThemeByPrefix = <T>(theme: T, prefix: string): T => Object.keys(theme).reduce((newTheme, key) => {
		return newTheme[key] ? {...newTheme, [key]: `${prefix}${theme[key]}`} : newTheme;
	}, {} as T)

	const getThemeByCustom = <NT, CT>(theme: NT, customTheme: CustomTheme<CT>, mode: ThemeMode): typeof theme => {
		let newTheme = theme;

		Object.keys(customTheme).forEach(key => {
			const value = customTheme[key];
			const themeCN = theme[key];
			const className = typeof value === 'function' ? value(themeCN) : getCNByMode(themeCN, value, mode);

			newTheme = {...newTheme, [key]: className};
		});

		return newTheme;
	};

	if (prefix) {
		const prefixTheme = getThemeByPrefix(defaultTheme, prefix);

		theme = themeMode === ThemeMode.EXTEND
			? getThemeByCustom(defaultTheme, prefixTheme, themeMode)
			: prefixTheme;
	}

	if (customTheme) {
		theme = getThemeByCustom(theme, customTheme, themeMode);
	}

	return [theme, customOptions];
};

/**
 * Extends base object
 *
 * @template O, NO
 *
 * @param {O} obj - base object
 * @param {NO} newObj  - new object to extend base
 * @returns {SpreadObject<O, NO>} - merged object
 */
const extendObject = <O, NO>(obj: O, newObj: NO): SpreadObject<O, NO> => ({...obj, ...newObj});

/**
 * Extends a component object and applies a "withOriginalComponent" HOC to an already existing component
 *
 * @template C, NC
 *
 * @param {C} components - base object of components
 * @param {NC} newComponents - components for extend base object
 * @returns {SpreadObject<C, NC>} - new object of components with extended components
 */
const extendComponents = <C extends AnyComponents, NC extends AnyComponents>(components: C, newComponents?: NC): SpreadObject<C, NC> => {
	let extendedComponents = newComponents ?? {} as NC;

	newComponents && Object.keys(newComponents).forEach(name => {
		const originalComponent = components[name];
		const component = newComponents[name];

		extendedComponents = {
			...extendedComponents,
			[name]: originalComponent ? withOriginalComponent(component, originalComponent) : component
		};
	});

	return extendObject(components, extendedComponents);
};

export {
	debounce,
	extendComponents,
	extendObject,
	extendTheme,
	hasSubstring,
	noop
};
