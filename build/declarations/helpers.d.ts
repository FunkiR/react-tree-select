import { AnyComponents, CustomTheme, SpreadObject, Theme, ThemeWithOptions } from "./types";
declare const debounce: <T extends Function>(f: T, ms: number) => T;
declare const hasSubstring: (string: string, substring?: string | number | undefined) => boolean;
declare const noop: () => any;
declare const extendTheme: <T extends Theme>(data: T | ThemeWithOptions<T>, newData?: CustomTheme<T> | ThemeWithOptions<CustomTheme<T> | null> | undefined) => ThemeWithOptions<T>;
declare const extendObject: <O, NO>(obj: O, newObj: NO) => SpreadObject<O, NO>;
declare const extendComponents: <C extends AnyComponents, NC extends AnyComponents>(components: C, newComponents?: NC | undefined) => SpreadObject<C, NC>;
export { debounce, extendComponents, extendObject, extendTheme, hasSubstring, noop };
