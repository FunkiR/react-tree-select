import {applyPlugin} from "~/hooks/useTreeSelect";

import {DEFAULT_PROPS} from "./constants";
import type {Props} from './types';
import {AsyncTreePluginReturnType} from "./types";

export const AsyncSelectPlugin = <P>(props: P): AsyncTreePluginReturnType<P> => applyPlugin<P, Props>(props,DEFAULT_PROPS);

export default AsyncSelectPlugin;
