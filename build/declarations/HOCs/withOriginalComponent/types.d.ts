import { ComponentType } from "react";
export declare type PluginComponentProps<P, PP> = P & PP & {
    Component: ComponentType<P>;
};
