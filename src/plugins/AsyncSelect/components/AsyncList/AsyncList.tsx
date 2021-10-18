import useAsyncSelect from "~/plugins/AsyncSelect/hooks/useAsyncSelect";
import React, {memo} from 'react';

import type {AsyncListComponent} from './types';

export const AsyncList: AsyncListComponent = props => {
	const {children, loading, onClickShowMoreButton, showMore} = props;
	const [components, theme] = useAsyncSelect('components', 'theme');
	const {Loader, 	ShowMoreButton} = components;

	const renderLoader = () => loading ? <Loader className={theme.AsyncListLoader} size={25} /> : null;

	const renderShowMoreButton = () => {
		if (loading || !showMore) return null;

		return <ShowMoreButton className={theme.ShowMoreButton} onClick={onClickShowMoreButton}>Show more</ShowMoreButton>;
	};

	return (
		<>
			{children}
			{renderLoader()}
			{renderShowMoreButton()}
		</>
	);
};

export default memo(AsyncList);