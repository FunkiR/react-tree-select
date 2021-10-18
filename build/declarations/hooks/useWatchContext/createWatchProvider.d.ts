import React from 'react';
import type { WatchContextValue, WatchProvider } from './types';
export declare const createWatchProvider: <T>(Context: React.Context<WatchContextValue<T>>) => WatchProvider<T>;
export default createWatchProvider;
