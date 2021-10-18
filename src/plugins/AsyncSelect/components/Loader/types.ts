import {ComponentType} from "react";

export type Props = {
	className?: string,
	size: number
};

export type LoaderComponent = ComponentType<Props>;