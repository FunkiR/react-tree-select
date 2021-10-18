import {faCaretDown, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import useMultiSelect from "~/plugins/MultiSelect/hooks/useMultiSelect";
import useMultiSelectPlugin from "~/plugins/MultiSelect/hooks/useMultiSelectPlugin";
import React, {createRef, memo, useEffect, useState} from 'react';

import {MIN_TAG_WIDTH} from "./constants";
import type {ValueComponent} from "./types";

export const Value: ValueComponent = props => {
	const {onToggleMenu} = props;
	const [tagWidth, setTegWidth] = useState(0);
	const containerRef = createRef<HTMLDivElement>();
	const [handleClear, handleRemove, values] = useMultiSelectPlugin('handleClear', 'handleRemove', 'values');
	const [components, theme] = useMultiSelect('components', 'theme');
	const {CaretIcon, ClearIcon, IndicatorsContainer, Tags, ValueContainer} = components;

	useEffect(() => {
		const {current} = containerRef;

		if (current) {
			const {clientWidth: width} = current;
			const tagsCount = Math.floor(width / MIN_TAG_WIDTH);

			if (tagsCount > 0) {
				const newTagWidth = Math.floor(width / tagsCount);

				setTegWidth(Math.max(newTagWidth, MIN_TAG_WIDTH));
			}
		}
	}, []);

	const renderClearIcon = () => values.length > 0
		? <ClearIcon className={theme.ClearIcon} icon={faTimesCircle} onClick={handleClear} />
		: null;

	return (
		<ValueContainer className={theme.ValueContainer} ref={containerRef}>
			<Tags onRemove={handleRemove} tagWidth={tagWidth} values={values} />
			<IndicatorsContainer className={theme.IndicatorsContainer}>
				{renderClearIcon()}
				<CaretIcon className={theme.CaretIcon} icon={faCaretDown} onClick={onToggleMenu} />
			</IndicatorsContainer>
		</ValueContainer>
	);
};

export default memo(Value);
