import {createContext} from 'react';

import {DEFAULT_WATCH_CONTEXT} from './constants';
import createWatchProvider from "./createWatchProvider";
import type {WatchContext, WatchContextValue, WatchProvider} from './types';

export const createWatchContext = <T, >(): [WatchProvider<T>, WatchContext<T>]  => {
	const Context = createContext<WatchContextValue<T>>(DEFAULT_WATCH_CONTEXT);
	const Provider = createWatchProvider(Context);

	return [Provider, Context];
};

export default createWatchContext;
