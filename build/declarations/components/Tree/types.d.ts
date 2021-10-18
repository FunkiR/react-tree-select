import type { Props as MenuProps } from '~/components/Menu/types';
export declare type Props = Pick<MenuProps, 'isSelected' | 'onExpand' | 'onSelect' | 'tree'> & {
    searchValue: string;
};
