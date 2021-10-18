import React, {forwardRef, memo} from 'react';

import type {ContainerComponent,Props} from "./types";

export const Container: ContainerComponent = forwardRef<HTMLDivElement, Props>((props, ref) => (
	<div {...props} ref={ref} />
));

export default memo(Container);
