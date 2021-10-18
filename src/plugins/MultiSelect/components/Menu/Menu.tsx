import useMultiSelectPlugin from "~/plugins/MultiSelect/hooks/useMultiSelectPlugin";
import React from 'react';

import type {MenuComponent} from './types';

export const Menu: MenuComponent = (props) => {
	const {Component, ...rest} = props;
	const [isSelected, handleSelect] = useMultiSelectPlugin('isSelected', 'handleSelect');

	return <Component {...rest} isSelected={isSelected} onSelect={handleSelect} />;
};

export default Menu;
