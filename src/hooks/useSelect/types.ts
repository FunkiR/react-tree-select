import {Components, Getters, Setters, SpreadObject, Theme} from "~/types";

export type DefaultValues = {
	components: Components
	getters: Getters,
	setters: Setters,
	theme: Theme
};

export type MappedValues<PluginValues> = {
	[K in keyof DefaultValues]: K extends keyof PluginValues
		? SpreadObject<DefaultValues[K], PluginValues[K]>
		: DefaultValues[K]
};

export type Values<PluginValues = never> = [PluginValues] extends [never] ? DefaultValues : MappedValues<PluginValues>;

export type ValuesKeys = keyof Values;