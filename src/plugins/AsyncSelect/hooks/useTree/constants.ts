import {TreeState} from "./types";

const initialState: TreeState = {
	loading: false,
	error: false,
	fulfilled: false,
	uploaded: false,
	map: {}
};

export {
	initialState
};
