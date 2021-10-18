import { MappedKeysToValues } from "~/hooks/useWatchContext";
import { PluginValues } from "./types";
declare const PluginProvider: import("~/hooks/useWatchContext").WatchProvider<PluginValues<any, any>>;
declare const useMultiSelectPlugin: <Keys extends (keyof PluginValues<any, any>)[]>(...keys: Keys) => MappedKeysToValues<PluginValues<any, any>, Keys>;
export { PluginProvider, useMultiSelectPlugin };
export default useMultiSelectPlugin;
