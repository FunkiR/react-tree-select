import type { Props as ComponentProps } from '~/components/Select/types';
import type { Node, PluginComponent, Value } from "~/types";
export declare type OnChangeEvent = {
    name: string;
    values: Value[];
};
export declare type Props = Pick<ComponentProps, 'name' | 'onSelect'> & {
    onChange: (event: OnChangeEvent) => void;
    isSelected: (nodeValue: Node, values: Value[]) => boolean;
    values: Value[];
};
export declare type SelectComponent = PluginComponent<Props>;
