import { Context, ProviderProps } from "react";
export declare type WatchContextValue<T> = {
    getValues: () => T;
    subscribe: (fn: SubscribeFunction<T>) => void;
    unsubscribe: (fn: SubscribeFunction<T>) => void;
};
export declare type WatchProvider<T> = (props: ProviderProps<T>) => JSX.Element;
export declare type WatchContext<T> = Context<WatchContextValue<T>>;
export declare type SubscribeFunction<T> = (values: T, prevValues: T) => void;
declare type ValueType<T, K> = K extends keyof T ? T[K] : never;
export declare type MappedKeysToValues<Values, Keys> = {
    [K in keyof Keys]: ValueType<Values, Keys[K]>;
};
export {};
