import cn from 'classnames';
import useAsyncSelect from "~/plugins/AsyncSelect/hooks/useAsyncSelect";
import React, {FC, memo, useMemo} from 'react';

import type {Props} from './types';

export const Loader: FC<Props> = ({className = '', size}) => {
	const style = useMemo(() => ({height: size, width: size}), [size]);
	const [theme] = useAsyncSelect('theme');

	return <div className={cn(className, theme.Loader)} style={style} />;
};

export default memo(Loader);
