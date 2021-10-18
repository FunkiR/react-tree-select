import React, {Context, useEffect, useMemo, useRef, useState} from 'react';

import type {SubscribeFunction,WatchContextValue, WatchProvider} from './types';

export const createWatchProvider = <T, >(Context: Context<WatchContextValue<T>>): WatchProvider<T> => props => {
	const {value, ...rest} = props;
	const [mounted, setMounted] = useState<boolean>(false);
	const [subscribes, setSubscribes] = useState<SubscribeFunction<T>[]>([]);
	const valuesRef = useRef<T>(value);

	useEffect(() => {
		if (mounted) {
			const prevValues = valuesRef.current;

			valuesRef.current = value;

			subscribes.forEach(fn => fn(valuesRef.current, prevValues));
		} else setMounted(true);
	}, [...Object.values(value)]);

	const memoizedValue = useMemo(() => {
		const subscribe = (fn: SubscribeFunction<T>) => setSubscribes(subscribes => [...subscribes, fn]);

		const unsubscribe = (fn: SubscribeFunction<T>) => setSubscribes(
			subscribes => subscribes.filter(f => f !== fn)
		);

		const getValues = () => valuesRef.current;

		return {
			getValues,
			subscribe,
			unsubscribe
		};
	}, []);

	return <Context.Provider {...rest} value={memoizedValue} />;
};

export default createWatchProvider;
