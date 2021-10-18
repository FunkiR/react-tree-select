import type { Props } from '~/components/Container/types';
import { ComponentType, ForwardRefExoticComponent } from "react";
export declare type SelectContainerComponent = ForwardRefExoticComponent<Props & {
    Component: ComponentType<Props>;
}>;
