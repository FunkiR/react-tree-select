import {faTimes} from "@fortawesome/free-solid-svg-icons";
import useMultiSelect from "~/plugins/MultiSelect/hooks/useMultiSelect";
import React, {memo, useCallback} from "react";

import type {ValueTagComponent} from './types';

export const ValueTag: ValueTagComponent = props => {
	const {className, index, onRemove, value} = props;
	const [components, getters, theme] = useMultiSelect('components', 'getters', 'theme');
	const {Tag, ValueTagLabel, ValueTagRemoveIcon} = components;
	const label = getters.value(value).label;

	const handleClick = useCallback(() => onRemove(index), [onRemove, index]);

	return (
		<Tag className={className} onClick={handleClick}>
			<ValueTagLabel className={theme.ValueTagLabel} title={label}>{label}</ValueTagLabel>
			<ValueTagRemoveIcon className={theme.ValueTagRemoveIcon} icon={faTimes} />
		</Tag>
	);
};

export default memo(ValueTag);
