import {shallow} from "enzyme";
import {Loader} from "~/plugins/AsyncSelect/components/Loader/Loader";
import React from "react";

describe('[AsyncSelect] Loader component', () => {
	it('renders component', () => {
		const wrapper = shallow(<Loader size={25} />);

		expect(wrapper).toMatchSnapshot();
	});

	it('width and height are equal to passed size', () => {
		const size = 25;
		const wrapper = shallow(<Loader size={size} />);
		const style = expect(wrapper.prop('style'));

		style.toHaveProperty('height', size);
		style.toHaveProperty('width', size);
	});
});


