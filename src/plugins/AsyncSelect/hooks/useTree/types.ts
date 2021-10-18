import {AsyncNode, Getters, Setters, TreeMap} from "~/plugins/AsyncSelect/types";

export type FetchRootsPayload = {
	getters: Getters,
	setters: Setters
};

export type FetchNodesPayload = FetchRootsPayload & {
	parent: AsyncNode
};

export type OnFetch = (parent: AsyncNode | null) => Promise<void> | void;

export type TreeState = {
	error: boolean,
	loading: boolean,
	fulfilled: boolean,
	uploaded: boolean,
	map: TreeMap
};

export type Config = {
	state: TreeState
};

export enum ActionType {
	FETCH_ROOTS = 'fetchRoots',
	ROOTS_FULFILLED = 'rootsFulfilled',
	ROOTS_REJECTED = 'rootsRejected',
	STOP_ROOTS_FETCHING = 'stopRootsFetching',
	FETCH_NODES = 'fetchNodes',
	NODES_FULFILLED = 'nodesFulfilled',
	NODES_REJECTED = 'nodesRejected',
	STOP_NODES_FETCHING = 'stopNodesFetching',
	SET_TREE = 'setTree'
}

export type UseTreeReturnType = [TreeState, OnFetch];
