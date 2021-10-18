import React, {ChangeEvent, FC, memo, useState} from 'react';

import type {Props} from './types';

const Input: FC<Props> = props => {
	const {className, name = '', onChange, value: initValue} = props;
	const [value, setValue] = useState(initValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {value} = e.currentTarget;

		setValue(value);
		onChange({name, value});
	};

	return <input className={className} onChange={handleChange} value={value} />;
};

export default memo(Input);
