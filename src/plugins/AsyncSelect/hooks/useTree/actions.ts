import {createAction} from "@reduxjs/toolkit";
import {TreeMap} from "~/plugins/AsyncSelect/types";

import {FetchNodesPayload,FetchRootsPayload} from "./types";
import {ActionType, TreeState} from "./types";

const fetchRoots = createAction<FetchRootsPayload>(ActionType.FETCH_ROOTS);

const rootsFulfilled = createAction<FetchRootsPayload & {roots: TreeMap, total: number}>(ActionType.ROOTS_FULFILLED);

const rootsRejected = createAction<FetchRootsPayload>(ActionType.ROOTS_REJECTED);

const stopRootsFetching = createAction<FetchRootsPayload>(ActionType.STOP_ROOTS_FETCHING);

const fetchNodes = createAction<FetchNodesPayload>(ActionType.FETCH_NODES);

const nodesFulfilled = createAction<FetchNodesPayload & {nodes: TreeMap, total: number}>(ActionType.NODES_FULFILLED);

const nodesRejected = createAction<FetchNodesPayload>(ActionType.NODES_REJECTED);

const stopNodesFetching = createAction<FetchNodesPayload>(ActionType.STOP_NODES_FETCHING);

const setTree = createAction<Partial<TreeState>>(ActionType.SET_TREE);

export {
	fetchNodes,
	fetchRoots,
	nodesFulfilled,
	nodesRejected,
	rootsFulfilled,
	rootsRejected,
	setTree,
	stopNodesFetching,
	stopRootsFetching};
