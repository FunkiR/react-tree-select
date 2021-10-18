import React, {FC,memo} from 'react';

import useDefaultProps from "./hooks/useDefaultProps";
import {SelectProvider} from "./hooks/useSelect";
import {Props} from "./types";

export const TreeSelect: FC<Partial<Props>> = props => {
	const {components, getters, setters, theme, ...rest} = useDefaultProps(props);

	return (
		<SelectProvider value={{components, getters, setters, theme}}>
			<components.Select {...rest} />
		</SelectProvider>
	);
};

export default memo(TreeSelect);
