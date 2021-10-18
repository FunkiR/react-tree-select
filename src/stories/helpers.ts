import type {Node} from '~/types';

const generateArrayTree = (limit = 5,  levelsCount = 2, offset = 0): Node[] => {
	const createNode = (index, levelsCount) => ({
		label: `node${index + offset}`,
		value: `node${index + offset}`,
		children: levelsCount > 0 ? createNodes(levelsCount) : [],
	});

	const createNodes = (levelsCount = 1) => {
		const nextLevelsCount = levelsCount - 1;

		return Array.from(Array(Math.round(limit / 2), limit)).map((v, i) => {
			return createNode(i, nextLevelsCount);
		});
	};

	return createNodes(levelsCount);
};

export {
	generateArrayTree
};
