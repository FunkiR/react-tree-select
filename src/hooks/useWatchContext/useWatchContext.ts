import {useContext, useEffect, useMemo, useState} from 'react';

import type {MappedKeysToValues, WatchContext, WatchContextValue} from "./types";

/**
 * Returns context values for passed keys and tracks their changes
 *
 * @template T, K
 *
 * @param {WatchContext<T>} Context - watch context with values
 * @param {K} keys - keys of values
 * @returns {MappedKeysToValues<T, K>}
 */

export const useWatchContext = <T, K extends (keyof T)[]>(Context: WatchContext<T>, keys: K): MappedKeysToValues<T, K> => {
	const {getValues, subscribe, unsubscribe} = useContext<WatchContextValue<T>>(Context);
	const [mounted, setMounted] = useState<boolean>(false);
	const [updateDate, setUpdateDate] = useState<Date>();

	useEffect(() => {
		const changeUpdateDate = (newContextValues: T, prevContextValues: T) => {
			const foundDiff = !!keys.find(key => newContextValues[key] !== prevContextValues[key]);

			foundDiff && setUpdateDate(new Date());
		};

		subscribe(changeUpdateDate);

		if (!mounted) setMounted(true);

		return () => unsubscribe(changeUpdateDate);
	}, [...keys]);

	return useMemo(() => {
		const values = getValues();

		return <any>keys.map(key => values[key]);
	}, [mounted, updateDate, ...keys]);
};

export default useWatchContext;
