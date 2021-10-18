import use, {Values, ValuesKeys} from "~/hooks/useSelect";
import {MappedKeysToValues} from "~/hooks/useWatchContext";

import {PluginValues} from "./types";

export const useAsyncSelect = <Keys extends ValuesKeys[]>(...keys: Keys): MappedKeysToValues<Values<PluginValues>, Keys> => use<PluginValues, Keys>(...keys);

export default useAsyncSelect;
