import {InternalOnFetchEvent, InternalOnFetchReturnType} from "~/plugins/AsyncSelect/components/Select/types";
import type {DefaultArrayNode} from "~/plugins/AsyncSelect/types";
import {generateArrayTree} from "stories/helpers";

/**
 * Pauses code execution
 *
 * @param {number} ms - suspension time
 * @returns {Promise<void>}
 */
const sleep = (ms = 0): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Returns random boolean value
 *
 * @returns {boolean} - random value
 */
const randomBool = (): boolean => Math.random() > 0.5;

/**
 * Generates an array tree with "hasChildren" property and offset relative to previously obtained nodes
 *
 * @param {number} offset - count of previously obtained nodes
 * @returns {DefaultArrayNode[]} - array tree
 */
const genAsyncArrayTree = (offset = 0): DefaultArrayNode[] => {
	const tree = generateArrayTree(10, 0, offset);

	return tree.map(node => ({...node, hasChildren: randomBool()}) as DefaultArrayNode);
};

/**
 * Returns an array tree given the offset
 *
 * @param {number} offset - count of previously obtained nodes
 * @returns {InternalOnFetchReturnType} - response for useTree hook
 */
const fetchData = async ({offset}: InternalOnFetchEvent): Promise<InternalOnFetchReturnType> => {
	await sleep(1000);
	const data = genAsyncArrayTree(offset);

	return {
		data,
		total: randomBool() ? Infinity : data.length
	};
};

export {
	fetchData,
	genAsyncArrayTree,
	sleep
};