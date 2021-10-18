import useWatchContext, {MappedKeysToValues} from "~/hooks/useWatchContext";
import {createWatchContext} from "~/hooks/useWatchContext";

import {Values, ValuesKeys} from "./types";

const [SelectProvider, SelectContext] = createWatchContext<Values>();

// @ts-ignore
const useSelect = <PluginValues, Keys extends ValuesKeys[]>(...keys: Keys): MappedKeysToValues<Values<PluginValues>, Keys> => useWatchContext(SelectContext, keys);

export {
	SelectContext,
	SelectProvider,
	useSelect
};

export default useSelect;
