import {applyPlugin} from "~/hooks/useTreeSelect";
import {AnyProps} from "~/types";

import {DEFAULT_PROPS} from "./constants";
import type {MultiSelectPluginReturnType,Props} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MultiSelectPlugin = <P extends AnyProps>({isSelected, value, ...props}: P): MultiSelectPluginReturnType<typeof props> =>
	applyPlugin<typeof props, Props>(props, DEFAULT_PROPS);


export default MultiSelectPlugin;
