import {noop} from "helpers";

import type {WatchContextValue} from './types';

const DEFAULT_WATCH_CONTEXT: WatchContextValue<any> = {
	getValues: noop,
	subscribe: noop,
	unsubscribe: noop
};

export {
	DEFAULT_WATCH_CONTEXT
};
