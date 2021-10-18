import { Values } from "~/hooks/useSelect";
import { MappedKeysToValues } from "~/hooks/useWatchContext";
import type { PluginValues } from "./types";
export declare const useMultiSelect: <Keys extends (keyof import("~/hooks/useSelect").DefaultValues)[]>(...keys: Keys) => MappedKeysToValues<import("~/hooks/useSelect").MappedValues<PluginValues>, Keys>;
export default useMultiSelect;
