import useWatchContext, {createWatchContext, MappedKeysToValues} from "~/hooks/useWatchContext";

import {PluginKeys, PluginValues} from "./types";

const [PluginProvider, PluginContext] = createWatchContext<PluginValues>();

const useMultiSelectPlugin = <Keys extends PluginKeys[]>(...keys: Keys)
	: MappedKeysToValues<PluginValues, Keys> => useWatchContext(PluginContext, keys);

export {
	PluginProvider,
	useMultiSelectPlugin
};

export default useMultiSelectPlugin;
