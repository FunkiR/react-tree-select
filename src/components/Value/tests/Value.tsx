import {Value} from "components/Value/Value";
import {shallow} from "enzyme";
import {noop} from "helpers";
import React from "react";

describe('Value component', () => {
	const value = {label: 'label', value: 'value'};

	it('renders correctly', () => {
		const wrapper = shallow(<Value onClear={noop} onToggleMenu={noop} value={null} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders label equal to label of value', () => {
		const wrapper = shallow(<Value onClear={noop} onToggleMenu={noop} value={value} />);
		expect(wrapper.text()).toEqual(value.label);
	});

	it('handles onClear and call provided callback', () => {
		const onClear = jest.fn();
		const mockClearIcon = (): any => null;
		const useSelect = jest.requireMock('hooks/useSelect');

		useSelect.mockImplementationOnce((...keys) => {
			const values = useSelect(...keys);
			const index = keys.findIndex(key => key === 'components');

			if (index > -1) {
				values[index] = {...values[index], ClearIcon: mockClearIcon};
			}

			return values;
		});

		const wrapper = shallow(<Value onClear={onClear} onToggleMenu={noop} value={value} />);

		wrapper.find(mockClearIcon).prop('onClick')();
		expect(onClear.mock.calls.length).toEqual(1);
	});
});

