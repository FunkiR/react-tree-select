import React, { ComponentType, ForwardRefExoticComponent } from "react";
import { AnyProps } from "~/types";
export declare const withOriginalComponent: <P extends AnyProps, PP extends AnyProps>(PluginComponent: React.ComponentType<PP>, Component: React.ComponentType<P>) => ForwardRefExoticComponent<any>;
export default withOriginalComponent;
