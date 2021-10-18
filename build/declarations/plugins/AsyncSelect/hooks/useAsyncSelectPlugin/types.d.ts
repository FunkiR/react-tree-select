import { OnFetch } from "~/plugins/AsyncSelect/hooks/useTree/types";
import { TreeState } from "~/plugins/AsyncSelect/types";
export declare type PluginValues = {
    tree: TreeState;
    onFetch: OnFetch;
};
export declare type PluginKeys = keyof PluginValues;
