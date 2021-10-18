import Input from "components/Input";
import {shallow} from "enzyme";
import React from "react";

describe('Input component', () => {
	it('renders component', () => {
		const wrapper = shallow(<Input onChange={jest.fn()} value={''} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('handles onChange and calls provided callback with event contains value', () => {
		const mockOnChange = jest.fn();
		const wrapper = shallow(<Input onChange={mockOnChange} value={''} />);
		const newValue = 'test';

		wrapper.find('input').simulate('change', {
			currentTarget: {
				value: newValue
			}
		});

		expect(mockOnChange.mock.calls.length).toEqual(1);
		expect(mockOnChange.mock.calls[0][0].value).toEqual(newValue);
	});
});
