import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {debounce} from "~/helpers";
import useSelect from "~/hooks/useSelect";
import React, {memo, useMemo, useState} from 'react';

import type {MenuComponent} from './types';

export const Menu: MenuComponent = props => {
	const {className, isSelected, onExpand, onSelect, tree} = props;
	const [searchValue, setSearchValue] = useState('');
	const [components, theme] = useSelect('components', 'theme');
	const {MenuContainer, SearchIcon, SearchInput, SearchInputContainer, Tree, TreeContainer} = components;

	const handleChange = useMemo(() => debounce(({value}) => setSearchValue(value), 500), []);

	return (
		<MenuContainer className={className}>
			<SearchInputContainer className={theme.SearchInputContainer}>
				<SearchIcon className={theme.SearchIcon} icon={faSearch} />
				<SearchInput className={theme.SearchInput} onChange={handleChange} value={searchValue} />
			</SearchInputContainer>
			<TreeContainer className={theme.TreeContainer}>
				<Tree
					isSelected={isSelected}
					onExpand={onExpand}
					onSelect={onSelect}
					searchValue={searchValue}
					tree={tree}
				/>
			</TreeContainer>
		</MenuContainer>
	);
};

export default memo(Menu);
