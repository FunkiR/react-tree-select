import {faCaretDown, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import useSelect from "~/hooks/useSelect";
import React, {memo} from "react";

import type {ValueComponent} from './types';

export const Value: ValueComponent = props => {
	const {onClear, onToggleMenu, value} = props;
	const [components, getters, theme] = useSelect('components', 'getters', 'theme');
	const {CaretIcon, ClearIcon, IndicatorsContainer, ValueContainer, ValueLabel} = components;
	const {label} = getters.value(value);

	return (
		<ValueContainer className={theme.ValueContainer}>
			<ValueLabel className={theme.ValueLabel} title={label}>
				{label}
			</ValueLabel>
			<IndicatorsContainer className={theme.IndicatorsContainer}>
				{value && <ClearIcon className={theme.ClearIcon} icon={faTimesCircle} onClick={onClear} />}
				<CaretIcon className={theme.CaretIcon} icon={faCaretDown} onClick={onToggleMenu} />
			</IndicatorsContainer>
		</ValueContainer>
	);
};

export default memo(Value);
