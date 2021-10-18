import React, {ComponentType, forwardRef,ForwardRefExoticComponent} from "react";
import {AnyProps} from "~/types";

import {PluginComponentProps} from "./types";

/**
 * Renders a plugin component and passes the original component to it as prop "Component"
 *
 * @template P, PP
 *
 * @param {ComponentType<P>} PluginComponent - original component
 * @param {ComponentType<PP>} Component - plugin component
 * @returns {ForwardRefExoticComponent<any>} - wrapped plugin component
 */
export const withOriginalComponent = <P extends AnyProps, PP extends AnyProps>(
	PluginComponent: ComponentType<PP>,
	Component: ComponentType<P>
): ForwardRefExoticComponent<any> => {
	return forwardRef<any, PluginComponentProps<P, PP>>((props, ref) => (
		<PluginComponent {...props} Component={Component} ref={ref} />
	));
};

export default withOriginalComponent;
