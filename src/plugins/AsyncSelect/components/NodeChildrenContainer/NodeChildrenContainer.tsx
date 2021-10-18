import type {Props} from '~/components/Container/types';
import useAsyncSelect from "~/plugins/AsyncSelect/hooks/useAsyncSelect";
import useNode from "~/plugins/AsyncSelect/hooks/useNode";
import React, {memo} from 'react';
import {PluginComponent} from "~/types";

export const NodeChildrenContainer: PluginComponent<Props> = props => {
	const {Component, children, ...restProps} = props;
	const {data, onFetch, searchValue}  = useNode();
	const [components, getters] = useAsyncSelect('components', 'getters');
	const {AsyncList} = components;
	const {children: nodeChildren, loading, uploaded} = getters.node(data);
	const showMoreButton = nodeChildren.length > 0 && !loading && !uploaded && !searchValue;

	const handleClickShowMoreButton = () => onFetch(data);

	return (
		<Component {...restProps}>
			<AsyncList
				loading={loading}
				onClickShowMoreButton={handleClickShowMoreButton}
				showMore={showMoreButton}
			>
				{children}
			</AsyncList>
		</Component>
	);
};

export default memo(NodeChildrenContainer);
