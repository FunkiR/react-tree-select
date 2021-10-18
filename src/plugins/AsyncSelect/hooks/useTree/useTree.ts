import {InternalOnFetch, Props} from "~/plugins/AsyncSelect/components/Select/types";
import useAsyncSelect from "~/plugins/AsyncSelect/hooks/useAsyncSelect";
import {AsyncNode} from "~/plugins/AsyncSelect/types";
import {useCallback, useMemo, useReducer} from 'react';

import {
	fetchNodes,
	fetchRoots,
	nodesFulfilled, nodesRejected,
	rootsFulfilled,
	rootsRejected,
	setTree, stopNodesFetching,
	stopRootsFetching
} from "./actions";
import {initialState} from "./constants";
import {arrayToTree, getRoots, getTreeMap} from "./helpers";
import reducer from "./reducer";
import {UseTreeReturnType} from "./types";

/**
 * Manages tree loading
 *
 * @param {Props} props - select props
 * @returns {UseTreeReturnType}
 */

const useTree = (props: Props): UseTreeReturnType => {
	const [state, dispatch] = useReducer(
		reducer,
		initialState
	);
	const {name, tree} = props;
	const [getters, setters] = useAsyncSelect('getters', 'setters');

	/**
	 * Gets the roots of the tree
	 *
	 * @param {InternalOnFetch} callback - function to get tree data
	 * @returns {void}
	 */
	const fetchTreeRoots = async (callback: InternalOnFetch) => {
		dispatch(fetchRoots({getters, setters}));

		try {
			const offset = getRoots(getters.tree(state).map, getters).length;
			const response = await callback({name, parent: null, offset});

			if (response) {
				const {data, total} = response;
				const roots = getTreeMap(data, null, getters);

				dispatch(rootsFulfilled({getters, roots, setters, total}));
			}
		} catch (e) {
			dispatch(rootsRejected({getters, setters}));
		} finally {
			dispatch(stopRootsFetching({getters, setters}));
		}
	};


	/**
	 * Gets the nodes of the parent
	 *
	 * @param {InternalOnFetch} callback - function to get tree data
	 * @param {AsyncNode} parent - parent node
	 * @returns {void}
	 */
	const fetchTreeNodes = async (callback: InternalOnFetch, parent: AsyncNode) => {
		dispatch(fetchNodes({getters, parent, setters}));

		try {
			const {children, id} = getters.node(parent);
			const response = await callback({name, parent, offset: children.length});

			if (response) {
				const {data, total} = response;
				const nodes = getTreeMap(data, id, getters);

				dispatch(nodesFulfilled({getters, nodes, parent, setters, total}));
			}
		} catch (e) {
			dispatch(nodesRejected({getters, parent, setters}));
		} finally {
			dispatch(stopNodesFetching({getters, parent, setters}));
		}
	};

	const fetchTree = useCallback((parent: AsyncNode | null = null) => {
		if (props.external) {
			props.onFetch({name, parent});
		} else {
			parent ? fetchTreeNodes(props.onFetch, parent) : fetchTreeRoots(props.onFetch);
		}
	}, [name, getters, setters, state]);

	useMemo(() => {
		let newState = state;

		if (Array.isArray(tree)) {
			const map = arrayToTree(tree, null, getters);

			newState = setters.tree(newState, "map", map);
			newState = setters.tree(newState, "fulfilled", Object.keys(map).length > 0);
		} else if (tree) {
			newState = tree;
		}

		dispatch(setTree(newState));
	}, [tree]);

	return useMemo(() => [state, fetchTree], [fetchTree, state, tree]);
};

export default useTree;
