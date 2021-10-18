import useWatchContext, {createWatchContext, MappedKeysToValues} from "~/hooks/useWatchContext";

import {PluginKeys, PluginValues} from "./types";

const [PluginProvider, PluginContext] = createWatchContext<PluginValues>();

const usePlugin = <Keys extends PluginKeys[]>(...keys: Keys)
	: MappedKeysToValues<PluginValues, Keys> => useWatchContext(PluginContext, keys);

export {
	PluginProvider,
	usePlugin
};

export default usePlugin;
