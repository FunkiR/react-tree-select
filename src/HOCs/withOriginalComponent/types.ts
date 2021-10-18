import {ComponentType} from "react";

export type PluginComponentProps<P, PP> = P & PP & {
	Component: ComponentType<P>
};