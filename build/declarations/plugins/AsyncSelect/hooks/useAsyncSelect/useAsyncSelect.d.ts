import { Values } from "~/hooks/useSelect";
import { MappedKeysToValues } from "~/hooks/useWatchContext";
import { PluginValues } from "./types";
export declare const useAsyncSelect: <Keys extends (keyof import("~/hooks/useSelect").DefaultValues)[]>(...keys: Keys) => MappedKeysToValues<import("~/hooks/useSelect").MappedValues<PluginValues>, Keys>;
export default useAsyncSelect;
