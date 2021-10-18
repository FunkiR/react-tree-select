import {shallow} from "enzyme";
import {ValueTag} from '~/plugins/MultiSelect/components/ValueTag/ValueTag';
import React from "react";

describe('[MultiSelect] ValueTag component', () => {
	it('renders value label', () => {
		const value = {
			label: 'label',
			value: 'value'
		};

		const wrapper = shallow(<ValueTag index={0} onRemove={jest.fn()} value={value} />);

		expect(wrapper.text()).toEqual(value.label);
	});

	it('handles onRemove and calls provided callback with index as argument', () => {
		const value = {
			label: 'label',
			value: 'value'
		};
		const onRemove = jest.fn();
		const index = 23;

		const wrapper = shallow(<ValueTag index={index} onRemove={onRemove} value={value} />);

		wrapper.simulate('click');

		expect(onRemove).toHaveBeenCalledWith(index);
	});
});