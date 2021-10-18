import {createReducer} from "@reduxjs/toolkit";

import {
	fetchNodes,
	fetchRoots,
	nodesFulfilled, nodesRejected,
	rootsFulfilled,
	rootsRejected,
	setTree,
	stopNodesFetching, 	stopRootsFetching} from "./actions";
import {initialState} from "./constants";
import {getRoots} from "./helpers";

const reducer = createReducer(initialState, (builder => {
	builder
		.addCase(fetchRoots, (state, action) => {
			const {setters} = action.payload;
			let newState = state;

			newState = setters.tree(newState, "error", false);
			newState = setters.tree(newState, "loading", true);

			return newState;
		})
		.addCase(rootsFulfilled, (state, action) => {
			const {getters, roots, setters, total} = action.payload;
			const {map} = getters.tree(state);
			let newState = state;

			newState = setters.tree(newState, "map", {...map, ...roots});
			newState = setters.tree(newState, "fulfilled", true);

			if (getRoots(map, getters).length === total) {
				newState = setters.tree(newState, "uploaded", true);
			}

			return newState;
		})
		.addCase(rootsRejected, (state, action) => {
			return action.payload.setters.tree(state, "error", true);
		})
		.addCase(stopRootsFetching, (state, action) => {
			return action.payload.setters.tree(state, "loading", false);
		})
		.addCase(fetchNodes, (state, action) => {
			const {getters, parent, setters} = action.payload;
			const {id} = getters.node(parent);
			const {map} = getters.tree(state);
			let newNode = map[id];

			newNode = setters.node(newNode, "error", false);
			newNode = setters.node(newNode, "loading", true);

			return setters.tree(state, "map", {...map, [id]: newNode});
		})
		.addCase(nodesFulfilled, (state, action) => {
			const {getters, nodes, parent, setters, total} = action.payload;
			const {id} = getters.node(parent);
			const {map} = getters.tree(state);
			let newNode = map[id];

			const children = [...getters.node(newNode).children, ...Object.keys(nodes)];

			newNode = setters.node(newNode, "children", children);
			newNode = setters.node(newNode, "uploaded", children.length === total);

			return setters.tree(state, "map", {...map, ...nodes, [id]: newNode});
		})
		.addCase(nodesRejected, (state, action) => {
			const {getters, parent, setters} = action.payload;
			const {id} = getters.node(parent);
			const {map} = getters.tree(state);

			map[id] = setters.node(map[id], "error", true);
		})
		.addCase(stopNodesFetching, (state, action) => {
			const {getters, parent, setters} = action.payload;
			const {id} = getters.node(parent);
			const {map} = getters.tree(state);

			map[id] = setters.node(map[id], "loading", false);
		})
		.addCase(setTree, (state, action) => ({
			...state,
			...action.payload
		}))
	;
}));

export default reducer;
