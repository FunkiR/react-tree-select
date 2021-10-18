export declare type OnChangeEvent = {
    name: string;
    value: string;
};
export declare type Props = {
    className?: string;
    name?: string;
    onChange: (event: OnChangeEvent) => void;
    value: string;
};
