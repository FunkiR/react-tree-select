import { AnyProps } from "~/types";
import type { MultiSelectPluginReturnType } from "./types";
export declare const MultiSelectPlugin: <P extends AnyProps>({ isSelected, value, ...props }: P) => MultiSelectPluginReturnType<Omit<P, "value" | "isSelected">>;
export default MultiSelectPlugin;
