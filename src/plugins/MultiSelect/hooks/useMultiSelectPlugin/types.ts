export type PluginValues<N = any, V = any> = {
	handleClear: () => void,
	handleRemove: (index: number) => void,
	handleSelect: (node: N) => void,
	hideAllTags: () => void,
	isSelected: (node: N) => boolean,
	toggleShowAllTags: () => void,
	showAllTags: boolean,
	values: V[]
};

export type PluginKeys = keyof PluginValues;