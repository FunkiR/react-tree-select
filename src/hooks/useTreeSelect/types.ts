import {DEFAULT_PROPS} from "~/app.constants";
import asyncSelectPlugin from "~/plugins/AsyncSelect";
import {AsyncTreePluginReturnType} from "~/plugins/AsyncSelect/types";
import multiSelectPlugin from "~/plugins/MultiSelect";
import {MultiSelectPluginReturnType} from "~/plugins/MultiSelect/types";
import {AnyProps, SpreadObject, ThemeWithOptions} from "~/types";

export type ApplyPluginReturnType<P extends AnyProps, PP extends AnyProps> = Omit<SpreadObject<P, PP>, 'theme'> & {
	components: SpreadObject<P['components'], PP['components']>,
	getters: SpreadObject<P['getters'], PP['getters']>,
	theme: ThemeWithOptions
};

type ReturnTypePlugin<P> = [
	[typeof multiSelectPlugin, MultiSelectPluginReturnType<P>],
	[typeof asyncSelectPlugin, AsyncTreePluginReturnType<P>]
];

type ExtractReturnType<T, P> = T extends [infer PL, infer RT] ? PL extends P ? RT : never : never;

type GetReturnType<PL, P, PRTs = ReturnTypePlugin<P>> = PRTs extends [infer PRT, ...infer RestPRTs]
	? ExtractReturnType<PRT, PL> extends never
		? RestPRTs extends []
			? never
			: GetReturnType<PL, P, RestPRTs>
		: ExtractReturnType<PRT, PL>
	: never;


export type PluginProps<Plugins extends any[], Props = typeof DEFAULT_PROPS> = Plugins extends [infer Plugin, ...infer RestPlugins]
	? RestPlugins extends []
		? GetReturnType<Plugin, Props>
		: PluginProps<RestPlugins, GetReturnType<Plugin, Props>>
	: Props;

export type Plugin = <P extends AnyProps>(props: P) => AnyProps;