import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon";
import {mount, shallow} from "enzyme";
import React from "react";

describe('Icon component', () => {
	it('renders component', () => {
		const wrapper = shallow(<Icon icon={faCaretDown} />);

		expect(wrapper).toMatchSnapshot();
	});

	it('handles click and calls provided callback', () => {
		const mockOnClick = jest.fn();
		const wrapper = mount(<Icon icon={faCaretDown} onClick={mockOnClick} />);

		wrapper.find('svg').simulate('click');
		expect(mockOnClick.mock.calls.length).toEqual(1);
	});
});
