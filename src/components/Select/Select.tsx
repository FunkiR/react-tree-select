import cn from 'classnames';
import useOutsideClickDetector from "~/hooks/useOutsideClickDetector";
import useSelect from "~/hooks/useSelect";
import React, {createRef, memo, useCallback, useState} from 'react';
import {Node} from "~/types";

import {SelectComponent} from './types';

export const Select: SelectComponent = props => {
	const {
		className,
		isSelected,
		name,
		onChange,
		onExpand,
		onSelect,
		tree,
		value
	} = props;
	const [showMenu, setShowMenu] = useState(false);
	const selectRef = createRef<HTMLDivElement>();
	const [components, getters, theme] = useSelect('components', 'getters', 'theme');
	const {Menu, SelectContainer, Value} = components;

	const handleSelect = useCallback(node => {
		const newValue = getters.node(node).value === getters.value(value).value ? null : getters.valueFromNode(node);

		onChange({name, value: newValue});
		onSelect({name, node});
		setShowMenu(false);
	}, [name, onChange, onSelect]);

	const handleClear = useCallback(() => onChange({name, value: null}), [onChange, name]);

	const handleExpand = useCallback(event => onExpand({name, ...event}), [onExpand, name]);

	const handleToggleMenu = useCallback(() => setShowMenu(prevShow => !prevShow), []);

	const hideMenu = useCallback(() => setShowMenu(false), []);

	const isSelectedByValue = useCallback((node: Node) => {
		return isSelected?.(node, value) ?? getters.node(node).value === getters.value(value).value;
	}, [getters, isSelected, value]);

	const renderValue = () => <Value onClear={handleClear} onToggleMenu={handleToggleMenu} value={value} />;

	const renderMenu = () => {
		if (!showMenu) return null;

		return (
			<Menu
				className={theme.MenuContainer}
				isSelected={isSelectedByValue}
				onExpand={handleExpand}
				onSelect={handleSelect}
				tree={tree}
			/>
		);
	};

	useOutsideClickDetector(selectRef, hideMenu, showMenu);

	return (
		<SelectContainer className={cn(theme.SelectContainer, className)} ref={selectRef}>
			{renderValue()}
			{renderMenu()}
		</SelectContainer>
	);
};

export default memo(Select);
