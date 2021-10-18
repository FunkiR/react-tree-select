import {hasSubstring} from "~/helpers";
import useSelect from "~/hooks/useSelect";
import React, {FC, memo, useMemo} from 'react';
import {Node as NodeType} from "~/types";

import {FOUND_CHILDREN_KEY} from "./constants";
import type {Props} from './types';

export const Tree: FC<Props> = props => {
	const {isSelected, onExpand, onSelect, searchValue, tree} = props;
	const [components, getters] = useSelect('components', 'getters', 'setters');
	const {Node} = components;

	const getFoundNodes = (nodes: Array<NodeType>) => nodes.reduce((foundNodes: NodeType[], node: NodeType) => {
		const {children, label} = getters.node(node);
		const foundChildren = getFoundNodes(children);
		let newFoundNodes = foundNodes;

		if (foundChildren.length > 0 || hasSubstring(label, searchValue)) {
			node[FOUND_CHILDREN_KEY] = foundChildren;

			newFoundNodes = [...newFoundNodes, node];
		}

		return newFoundNodes;
	}, []);

	const treeToRender = useMemo(() => searchValue ? getFoundNodes(tree) : tree, [searchValue, tree]);

	const renderNode = (node: NodeType) => {
		if (!node) return null;

		const {children: defaultChildren, label, value} = getters.node(node);
		const children = searchValue ? node[FOUND_CHILDREN_KEY] : defaultChildren;
		const selected = isSelected(node);
		const hasChildren = children.length > 0;
		const found = hasSubstring(label, searchValue);
		const expandedNode = !!searchValue;

		return (
			<Node
				data={node}
				expanded={expandedNode}
				found={found}
				hasChildren={hasChildren}
				key={value}
				label={label}
				onClick={onSelect}
				onExpand={onExpand}
				selected={selected}
			>
				{() => children?.map(renderNode)}
			</Node>
		);
	};

	return <>{treeToRender.map(renderNode)}</>;
};

export default memo(Tree);
