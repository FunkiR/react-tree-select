import {debounce, extendObject, extendTheme, hasSubstring} from "~/helpers";
import {sleep} from "~/plugins/AsyncSelect/stories/helpers";
import requireActual = jest.requireActual;
import cn from "classnames";
import {Component, ThemeMode} from "~/types";

describe('helpers', () => {
	describe('debounce function', () => {
		it('calls the passed function only 1 time', async () => {
			const ms = 500;
			const mockFn = jest.fn();

			const fnWithDebounce = debounce(mockFn, ms);

			let i = 5;

			while (i > 0) {
				fnWithDebounce();
				i--;
			}

			await sleep(ms);

			expect(mockFn).toHaveBeenCalledTimes(1);
		});

		it('passed function receives all arguments', async () => {
			const mockFn = jest.fn();
			const args = [1, 5, 7];
			const fnWithDebounce = debounce(mockFn, 0);

			fnWithDebounce(...args);

			await sleep();

			expect(mockFn).toHaveBeenCalledWith(...args);
		});
	});

	describe('hasSubstring function', () => {
		it('finds a substring in a string', () => {
			const string = '6asd86asdas78d6';
			const substring = string.slice(3, 4);

			expect(hasSubstring(string, substring)).toBeTruthy();
		});

		it('finds a substring in a string when substring is number', () => {
			const substring = 869;
			const string = `6asd86${substring}asdas78d6`;

			expect(hasSubstring(string, substring)).toBeTruthy();
		});

		it('finds a substring in a string when substring is float', () => {
			const substring = 869.23;
			const string = `6asd86${substring}asdas78d6`;

			expect(hasSubstring(string, substring)).toBeTruthy();
		});

		it('returns false when substring is undefined', () => {
			const string = `6asd86asdas78d6`;

			expect(hasSubstring(string, undefined)).toBeFalsy();
		});
	});

	describe('extendTheme', () => {
		const {DEFAULT_THEME} = requireActual('app.constants');

		it('replaces selectors correctly', () => {
			const theme = {...DEFAULT_THEME, [Component.SelectContainer]: '.tests'};

			expect(extendTheme(DEFAULT_THEME, theme)[0]).toMatchObject(theme);
		});

		it('returns the base theme if no theme for extend is passed', () => {
			expect(extendTheme(DEFAULT_THEME)[0]).toMatchObject(DEFAULT_THEME);
		});

		it('applies selector prefix to all exists selectors', () => {
			const prefix = 'test_';
			const [extendedTheme] = extendTheme(DEFAULT_THEME, [null, {prefix}]);
			const result = Object.values(extendedTheme).every(s => !s || (s as string).startsWith(prefix));

			expect(result).toBeTruthy();
		});

		it('concatenates selectors in one line when mode is "EXTEND"', () => {
			const additionalSelector = '.tests';
			const additionalTheme = Object.keys(DEFAULT_THEME)
				.reduce((theme, key) => ({...theme, [key]: additionalSelector}), {});
			const [extendedTheme] = extendTheme(DEFAULT_THEME, [additionalTheme, {mode: ThemeMode.EXTEND}]);
			const result = Object.keys(extendedTheme).every(key => {

				return extendedTheme[key] === cn(DEFAULT_THEME[key], additionalSelector);
			});

			expect(result).toBeTruthy();
		});
	});

	describe('extendObject', () => {
		it('extends base object', () => {
			const obj = {
				test: '123'
			};
			const newObj = {
				test1: '1231'
			};

			expect(extendObject(obj, newObj)).toMatchObject({...obj, ...newObj});
		});
	});
});