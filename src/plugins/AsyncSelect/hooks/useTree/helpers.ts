import {AsyncNode, Getters, TreeMap} from "~/plugins/AsyncSelect/types";
import {Node as ArrayNode} from '~/types';

const getTreeMap = (tree: TreeMap | ArrayNode[], parent: string | null = null, getters: Getters)
	: TreeMap => Array.isArray(tree) ? arrayToTree(tree, parent, getters) : tree;

const getRoots = (map: TreeMap, getters: Getters): Array<string> =>
{
	return Object.keys(map).filter(value => !getters.node(map[value]).parent);
};

const arrayToTree = (arrayTree: Array<ArrayNode>, parentId: string | null = null, getters: Getters): TreeMap => {
	const tree = {};

	const getChildValue = (parent: string, nodeValue: string) => `${parent}$${nodeValue}`;

	const getTreeNodes = (arrayNode: ArrayNode, parent: string | null = null): Array<AsyncNode> => {
		const {children, hasChildren, label, value} = getters.arrayNode(arrayNode);
		const id = parent ? getChildValue(parent, value) : value;
		const node = {
			children: children.map(child => getChildValue(id, getters.arrayNode(child).value)),
			data: arrayNode,
			error: false,
			id,
			label,
			loading: false,
			hasChildren: (Array.isArray(children) && children.length > 0) || hasChildren,
			parent,
			uploaded: children.length > 0,
			value
		};

		return children
			.map(child => getTreeNodes(child, node.value))
			.reduce((nodes, childNodes) => [...nodes, ...childNodes], [node]);
	};

	arrayTree.forEach(node => {
		getTreeNodes(node, parentId).forEach(asyncNode => {
			tree[getters.node(asyncNode).id] = asyncNode;
		});
	});

	return tree;
};

export {
	arrayToTree,
	getRoots,
	getTreeMap
};
