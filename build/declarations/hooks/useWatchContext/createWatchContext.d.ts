import type { WatchContext, WatchProvider } from './types';
export declare const createWatchContext: <T>() => [WatchProvider<T>, WatchContext<T>];
export default createWatchContext;
