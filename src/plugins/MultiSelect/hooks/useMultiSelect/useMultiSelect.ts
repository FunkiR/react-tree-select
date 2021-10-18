import use, {Values, ValuesKeys} from "~/hooks/useSelect";
import {MappedKeysToValues} from "~/hooks/useWatchContext";

import type {PluginValues} from "./types";

export const useMultiSelect = <Keys extends ValuesKeys[]>(...keys: Keys): MappedKeysToValues<Values<PluginValues>, Keys> => use<PluginValues, Keys>(...keys);

export default useMultiSelect;
