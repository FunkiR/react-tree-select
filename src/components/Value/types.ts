import {ComponentType} from 'react';
import type {Value} from '~/types';

export type Props = {
	onClear: () => void,
	onToggleMenu: () => void,
	value: Value | null
};

export type ValueComponent = ComponentType<Props>;
