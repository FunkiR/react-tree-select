import {ButtonHTMLAttributes,ComponentType, DetailedHTMLProps} from "react";

export type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonComponent = ComponentType<Props>;