import {hasSubstring} from "~/helpers";
import useAsyncSelect from "~/plugins/AsyncSelect/hooks/useAsyncSelect";
import useAsyncSelectPlugin from "~/plugins/AsyncSelect/hooks/useAsyncSelectPlugin";
import {AsyncNode, TreeMap} from "~/plugins/AsyncSelect/types";
import React, {memo, useEffect, useMemo} from 'react';
import {PluginComponent} from "~/types";

import type {Props} from './types';

export const Tree: PluginComponent<Props> = (props: Props) => {
	const {isSelected, onExpand, onSelect, searchValue} = props;
	const [components, getters] = useAsyncSelect('components', 'getters');
	const [tree, onFetch] = useAsyncSelectPlugin('tree', 'onFetch');
	const {fulfilled, loading, map, uploaded} = getters.tree(tree);

	const getFoundNodes = (map: TreeMap): TreeMap => {
		const foundTree = {};

		const addFoundNode = (node: AsyncNode) => {
			const {id, parent} = getters.node(node);
			foundTree[id] = node;

			parent && addFoundNode(map[parent]);
		};

		Object.keys(map).forEach(key => {
			const node = map[key];

			if (hasSubstring(getters.node(node).label, searchValue)) {
				addFoundNode(node);
			}
		});

		return foundTree;
	};

	const treeToRender = useMemo(() => searchValue ? getFoundNodes(map) : map, [searchValue, map]);
	const roots = useMemo(
		() => Object.keys(treeToRender).filter(id => !getters.node(treeToRender[id]).parent),
		[treeToRender]
	);
	const {AsyncList, Node} = components;

	useEffect(() => {
		!fulfilled && !loading && onFetch(null);
	}, [fulfilled]);

	const handleClickShowMoreButton = () => onFetch(null);

	const renderNode = (id: string) => {
		const node = treeToRender[id];

		if (!node) return null;

		const {children, hasChildren, label} = getters.node(node);
		const selected = isSelected(node);
		const found = hasSubstring(label, searchValue);
		const expanded = !!searchValue;

		return (
			<Node
				data={node}
				expanded={expanded}
				found={found}
				hasChildren={hasChildren}
				key={id}
				label={label}
				onClick={onSelect}
				onExpand={onExpand}
				onFetch={onFetch}
				searchValue={searchValue}
				selected={selected}
			>
				{(expanded) => expanded && children.map(renderNode)}
			</Node>
		);
	};

	const showMoreButton = !loading && !uploaded && !searchValue && fulfilled;

	return (
		<AsyncList loading={loading} onClickShowMoreButton={handleClickShowMoreButton} showMore={showMoreButton}>
			{roots.map(renderNode)}
		</AsyncList>
	);
};

export default memo(Tree);
