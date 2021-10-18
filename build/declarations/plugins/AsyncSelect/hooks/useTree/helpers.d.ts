import { Getters, TreeMap } from "~/plugins/AsyncSelect/types";
import { Node as ArrayNode } from '~/types';
declare const getTreeMap: (tree: TreeMap | ArrayNode[], parent: string | null | undefined, getters: Getters) => TreeMap;
declare const getRoots: (map: TreeMap, getters: Getters) => Array<string>;
declare const arrayToTree: (arrayTree: Array<ArrayNode>, parentId: string | null | undefined, getters: Getters) => TreeMap;
export { arrayToTree, getRoots, getTreeMap };
