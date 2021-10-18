import {PluginProvider} from "~/plugins/AsyncSelect/hooks/useAsyncSelectPlugin";
import useTree from "~/plugins/AsyncSelect/hooks/useTree";
import React, {memo} from 'react';
import {PluginComponent} from "~/types";

import {Props} from "./types";

export const Select: PluginComponent<Props> = props => {
	const {Component} = props;
	const [tree, onFetch] = useTree(props);

	return  (
		<PluginProvider value={{tree, onFetch}}>
			<Component {...props} />
		</PluginProvider>
	);
};

export default memo(Select);
