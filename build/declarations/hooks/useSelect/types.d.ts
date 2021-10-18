import { Components, Getters, Setters, SpreadObject, Theme } from "~/types";
export declare type DefaultValues = {
    components: Components;
    getters: Getters;
    setters: Setters;
    theme: Theme;
};
export declare type MappedValues<PluginValues> = {
    [K in keyof DefaultValues]: K extends keyof PluginValues ? SpreadObject<DefaultValues[K], PluginValues[K]> : DefaultValues[K];
};
export declare type Values<PluginValues = never> = [PluginValues] extends [never] ? DefaultValues : MappedValues<PluginValues>;
export declare type ValuesKeys = keyof Values;
