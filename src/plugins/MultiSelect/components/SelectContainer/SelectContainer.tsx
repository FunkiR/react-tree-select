import useCombinedRef from "~/hooks/useCombinedRef";
import useOutsideClickDetector from "~/hooks/useOutsideClickDetector";
import useMultiSelectPlugin from "~/plugins/MultiSelect/hooks/useMultiSelectPlugin";
import React, {forwardRef, memo, useRef} from "react";

import type {SelectContainerComponent} from "./types";

export const SelectContainer: SelectContainerComponent = forwardRef((props, ref) => {
	const {Component, ...rest} = props;
	const innerRef = useRef<HTMLDivElement>(null);
	const combinedRef = useCombinedRef(ref, innerRef);
	const [hideAllTags, showAllTags] = useMultiSelectPlugin('hideAllTags', 'showAllTags');

	useOutsideClickDetector(combinedRef, hideAllTags, showAllTags);

	return <Component {...rest} ref={combinedRef} />;
});

export default memo(SelectContainer);
