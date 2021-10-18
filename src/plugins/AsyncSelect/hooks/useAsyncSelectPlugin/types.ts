import {OnFetch} from "~/plugins/AsyncSelect/hooks/useTree/types";
import {TreeState} from "~/plugins/AsyncSelect/types";

export type PluginValues = {
	tree: TreeState,
	onFetch: OnFetch
};

export type PluginKeys = keyof PluginValues;