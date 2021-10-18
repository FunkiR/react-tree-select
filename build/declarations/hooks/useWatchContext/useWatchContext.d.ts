import type { MappedKeysToValues, WatchContext } from "./types";
export declare const useWatchContext: <T, K extends (keyof T)[]>(Context: WatchContext<T>, keys: K) => MappedKeysToValues<T, K>;
export default useWatchContext;
