import {ComponentType, ReactNode} from "react";

export type Props = {
	children: ReactNode
	loading: boolean,
	onClickShowMoreButton: () => void,
	showMore: boolean,
};

export type AsyncListComponent = ComponentType<Props>;