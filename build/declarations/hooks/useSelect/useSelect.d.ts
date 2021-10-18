import { MappedKeysToValues } from "~/hooks/useWatchContext";
import { Values } from "./types";
declare const SelectProvider: import("~/hooks/useWatchContext").WatchProvider<import("./types").DefaultValues>, SelectContext: import("~/hooks/useWatchContext").WatchContext<import("./types").DefaultValues>;
declare const useSelect: <PluginValues, Keys extends (keyof import("./types").DefaultValues)[]>(...keys: Keys) => MappedKeysToValues<Values<PluginValues>, Keys>;
export { SelectContext, SelectProvider, useSelect };
export default useSelect;
