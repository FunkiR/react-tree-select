import { ComponentType, ReactNode } from "react";
export declare type Props = {
    children: ReactNode;
    loading: boolean;
    onClickShowMoreButton: () => void;
    showMore: boolean;
};
export declare type AsyncListComponent = ComponentType<Props>;
