import type {Props} from '~/plugins/AsyncSelect/components/Node/types';
import {createContext, useContext} from "react";

const NodeContext = createContext({} as Props);

export const useNode = (): Props => useContext(NodeContext);

export {
	NodeContext
};

export default useNode;
