import { MappedKeysToValues } from "~/hooks/useWatchContext";
import { PluginValues } from "./types";
declare const PluginProvider: import("~/hooks/useWatchContext").WatchProvider<PluginValues>;
declare const usePlugin: <Keys extends (keyof PluginValues)[]>(...keys: Keys) => MappedKeysToValues<PluginValues, Keys>;
export { PluginProvider, usePlugin };
export default usePlugin;
