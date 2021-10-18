import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import useSelect from "~/hooks/useSelect";
import React, {FC, memo} from 'react';

import type {Props} from "./types";

export const Icon: FC<Props> = props => {
	const {className, ...iconProps} = props;
	const [theme] = useSelect('theme');

	return <FontAwesomeIcon className={cn(theme.Icon, className)} {...iconProps} />;
};

export default memo(Icon);
