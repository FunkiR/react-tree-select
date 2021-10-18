import Container from "components/Container";
import {shallow} from "enzyme";
import React from "react";

describe('Container component', () => {

	it('renders component', () => {
		const wrapper = shallow(<Container />);
		expect(wrapper).toMatchSnapshot();
	});

	it('has text rendered as a child', () => {
		const text = 'test';

		const wrapper = shallow(<Container>{text}</Container>);
		expect(wrapper.text()).toEqual(text);
	});

	it('has component rendered as a child', () => {
		const Component = () => <div />;

		const wrapper = shallow(<Container><Component /></Container>);
		expect(wrapper.exists(Component)).toBeTruthy();
	});

	it('has html attribute equal to title prop', () => {
		const title = 'title';

		const wrapper = shallow(<Container title={title} />);
		expect(wrapper.prop('title')).toEqual(title);
	});

	it('handles onClick properly and calls provided callback', () => {
		const mockOnClick = jest.fn();

		const wrapper = shallow(<Container onClick={mockOnClick} />);
		wrapper.find('div').simulate('click');

		expect(mockOnClick.mock.calls.length).toEqual(1);
	});
});

