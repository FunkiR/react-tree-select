import useAsyncSelect from "~/plugins/AsyncSelect/hooks/useAsyncSelect";
import {NodeContext} from "~/plugins/AsyncSelect/hooks/useNode";
import React, {memo} from 'react';
import {InternalOnExpandEvent, PluginComponent} from "~/types";

import type {Props} from './types';

export const Node: PluginComponent<Props> = (props) => {
	const {Component, data, onExpand, onFetch, ...rest} = props;
	const [getters] = useAsyncSelect('getters');
	const {children, hasChildren, loading, uploaded} = getters.node(data);

	const handleExpand = (event: InternalOnExpandEvent) => {
		if (event.expanded && Array.isArray(children) && children.length === 0 && hasChildren && !uploaded && !loading) {
			onFetch(data);
		}

		onExpand(event);
	};

	return (
		<NodeContext.Provider value={props}>
			<Component {...rest} data={data} onExpand={handleExpand} onFetch={onFetch} />
		</NodeContext.Provider>
	);
};

export default memo(Node);
