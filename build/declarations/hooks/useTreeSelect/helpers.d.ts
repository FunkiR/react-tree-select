import { AnyProps } from "~/types";
import { ApplyPluginReturnType } from './types';
declare const applyPlugin: <P extends AnyProps, PP extends AnyProps>(props: P, pluginProps: PP) => ApplyPluginReturnType<P, PP>;
export { applyPlugin };
