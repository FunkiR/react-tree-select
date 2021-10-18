import { ComponentType } from 'react';
import type { Value } from '~/types';
export declare type Props = {
    onClear: () => void;
    onToggleMenu: () => void;
    value: Value | null;
};
export declare type ValueComponent = ComponentType<Props>;
