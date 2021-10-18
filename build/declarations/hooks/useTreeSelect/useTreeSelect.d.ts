/// <reference types="react" />
import type { Plugin, PluginProps } from './types';
declare const useTreeSelect: <Plugins extends Plugin[]>(...plugins: Plugins) => (props: Partial<PluginProps<Plugins, import("~/types").DefaultProps>>) => JSX.Element;
export default useTreeSelect;
