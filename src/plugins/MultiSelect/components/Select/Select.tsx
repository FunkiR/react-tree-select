import useMultiSelect from "~/plugins/MultiSelect/hooks/useMultiSelect";
import {PluginProvider} from "~/plugins/MultiSelect/hooks/useMultiSelectPlugin";
import React, {useCallback, useState} from 'react';

import {SelectComponent} from "./types";

export const Select: SelectComponent = props => {
	const {Component, name, onChange, onSelect, values, ...rest} = props;
	const [showAllTags, setShowAllTags] = useState(false);
	const [getters] = useMultiSelect('getters');

	const isSelectedByValue = useCallback(
		node => props.isSelected(node, values),
		[values, getters, props.isSelected]
	);

	const handleSelect = useCallback(
		node => {
			const newValues = isSelectedByValue(node)
				? values.filter(value => getters.value(value).value !== getters.node(node).value)
				: [...values, getters.valueFromNode(node)];

			onChange({name, values: newValues});
			onSelect({name, node});
		},
		[name, values, isSelectedByValue, getters]
	);

	const handleRemove = useCallback(
		index => onChange({name, values: values.filter((v, i) => i !== index)}),
		[name, onChange, values]
	);

	const handleClear = useCallback(() => {
		onChange({name, values: []});
		setShowAllTags(false);
	}, [onChange, name]);

	const hideAllTags = useCallback(() => setShowAllTags(false), []);

	const toggleShowAllTags = useCallback(() => setShowAllTags(show => !show), []);

	return (
		<PluginProvider value={{
			handleClear,
			handleRemove,
			handleSelect,
			hideAllTags,
			isSelected: isSelectedByValue,
			toggleShowAllTags,
			showAllTags,
			values
		}}>
			<Component {...rest} name={name} />
		</PluginProvider>
	);
};

export default Select;
