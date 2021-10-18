import {Context, ProviderProps} from "react";

export type WatchContextValue<T> = {
	getValues: () => T,
	subscribe: (fn: SubscribeFunction<T>) => void,
	unsubscribe: (fn: SubscribeFunction<T>) => void
};

export type WatchProvider<T> = (props: ProviderProps<T>) => JSX.Element;

export type WatchContext<T> = Context<WatchContextValue<T>>;

export type SubscribeFunction<T> = (values: T, prevValues: T) => void;

type ValueType<T, K> = K extends keyof T ? T[K] : never;

export type MappedKeysToValues<Values, Keys> = {
	[K in keyof Keys]: ValueType<Values, Keys[K]>;
};
