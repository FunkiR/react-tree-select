import {Node} from "components/Node/Node";
import {Props} from "components/Node/types";
import {mount, shallow} from "enzyme";
import React from "react";
import {Component} from "~/types";

describe('Node component', () => {
	const getProps = (mixin: Partial<Props> = {}) => {
		const data = {
			label: 'label',
			value: 'value',
			children: []
		};

		return {
			data,
			expanded: false,
			found: false,
			hasChildren: false,
			label: data.label,
			onClick: jest.fn(),
			onExpand: jest.fn(),
			children: jest.fn().mockReturnValue(null),
			selected: false,
			...mixin
		};
	};

	it('renders without children', () => {
		const wrapper = shallow(<Node {...getProps()} />);

		expect(wrapper).toMatchSnapshot();
	});

	describe('renders with children when "expanded" prop changes', () => {
		const props = getProps({
			data: {
				children: [
					{
						children: [],
						label: 'child1',
						value: 'child1'
					},
					{
						children: [],
						label: 'child2',
						value: 'child2'
					},
				],
				label: 'label',
				value: 'value'
			},
			hasChildren: true,
			children: node => node.children.map(child => {
				return <Node {...getProps({data: child, label: child.label})} hasChildren={false} key={child.value} />;
			})
		});

		it('expanded is false', () => {
			const wrapper = shallow(<Node {...props} expanded={false} />);

			expect(wrapper).toMatchSnapshot();
		});

		it('expanded is true', () => {
			const wrapper = shallow(<Node {...props} expanded={true} />);

			expect(wrapper).toMatchSnapshot();
		});
	});

	it('handles onClick by label and calls provided callback with node data', () => {
		const mockOnClick = jest.fn();
		const props = getProps({
			onClick: mockOnClick
		});

		const wrapper = mount(<Node {...props} />);

		wrapper.find(`div.${Component.NodeLabel}`).simulate('click');

		expect(mockOnClick).toBeCalledWith(props.data);
	});

	it('handles onExpand and calls provided callback with expanded and node data', () => {
		const mockOnExpand = jest.fn();
		const props = getProps({
			expanded: false,
			hasChildren: true,
			onExpand: mockOnExpand
		});

		const wrapper = mount(<Node {...props} />);

		wrapper.find(`div.${Component.NodeExpandIconContainer} svg`).simulate('click');

		expect(mockOnExpand).toBeCalledWith({expanded: true, node: props.data});
	});
});

