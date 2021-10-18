import {shallow} from "enzyme";
import {AsyncList} from "~/plugins/AsyncSelect/components/AsyncList/AsyncList";
import {Button} from "~/plugins/AsyncSelect/components/Button/Button";
import {Loader} from "~/plugins/AsyncSelect/components/Loader/Loader";
import React from 'react';

describe('[AsyncSelect] AsyncList component', () => {
	const renderList = ({children = null, ...rest}) => (
		<AsyncList loading={false} onClickShowMoreButton={jest.fn()} showMore={false} {...rest} >
			{children}
		</AsyncList>
	);

	it('renders Loader component when "loading" is true', () => {
		const wrapper = shallow(renderList({loading: true}));

		expect(wrapper.find(Loader).exists()).toBeTruthy();
	});

	it('renders no Loader component when "loading" is false', () => {
		const wrapper = shallow(renderList({loading: false}));

		expect(wrapper.find(Loader).exists()).toBeFalsy();
	});

	it('renders Button component when "showMore" is true', () => {
		const wrapper = shallow(renderList({showMore: true}));

		expect(wrapper.find(Button).exists()).toBeTruthy();
	});

	it('renders no Button component when "showMore" is false', () => {
		const wrapper = shallow(renderList({showMore: false}));

		expect(wrapper.find(Button).exists()).toBeFalsy();
	});

	it('handles onClick by showMore button and calls provided callback', () => {
		const mockOnClick = jest.fn();
		const wrapper = shallow(renderList({onClickShowMoreButton: mockOnClick, showMore: true}));

		wrapper.find(Button).simulate('click');

		expect(mockOnClick).toHaveBeenCalled();
	});
});