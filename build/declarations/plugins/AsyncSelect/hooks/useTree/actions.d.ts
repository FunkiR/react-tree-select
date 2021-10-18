import { TreeMap } from "~/plugins/AsyncSelect/types";
import { FetchNodesPayload, FetchRootsPayload } from "./types";
import { TreeState } from "./types";
declare const fetchRoots: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchRootsPayload, string>;
declare const rootsFulfilled: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchRootsPayload & {
    roots: TreeMap;
    total: number;
}, string>;
declare const rootsRejected: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchRootsPayload, string>;
declare const stopRootsFetching: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchRootsPayload, string>;
declare const fetchNodes: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchNodesPayload, string>;
declare const nodesFulfilled: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchRootsPayload & {
    parent: import("~/plugins/AsyncSelect/types").AsyncNode;
} & {
    nodes: TreeMap;
    total: number;
}, string>;
declare const nodesRejected: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchNodesPayload, string>;
declare const stopNodesFetching: import("@reduxjs/toolkit").ActionCreatorWithPayload<FetchNodesPayload, string>;
declare const setTree: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<TreeState>, string>;
export { fetchNodes, fetchRoots, nodesFulfilled, nodesRejected, rootsFulfilled, rootsRejected, setTree, stopNodesFetching, stopRootsFetching };
