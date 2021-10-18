export type OnChangeEvent = {
	name: string,
	value: string
};

export type Props = {
    className?: string,
	name?: string,
    onChange: (event: OnChangeEvent) => void,
    value: string
};
