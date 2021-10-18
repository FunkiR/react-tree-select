import {shallow} from "enzyme";
import {Node} from "~/plugins/AsyncSelect/components/Node/Node";
import React from 'react';

describe('[AsyncSelect] Node component', () => {
	it('calls onFetch when calls onExpand', () => {
		const mockOnExpand = jest.fn();
		const mockOnFetch = jest.fn();
		const data = {
			children: [],
			hasChildren: true,
			loading: false,
			uploaded: false
		};

		const Component = (): any => null;

		const wrapper = shallow(
			<Node
				Component={Component}
				data={data}
				expanded={false}
				found={true}
				hasChildren={true}
				label="label"
				onClick={jest.fn()}
				onExpand={mockOnExpand}
				onFetch={mockOnFetch}
				searchValue=""
				selected={false}
			>
				{jest.fn()}
			</Node>
		);

		wrapper.find(Component).prop('onExpand')({expanded: true});

		expect(mockOnFetch).toHaveBeenCalled();
		expect(mockOnFetch).toHaveBeenCalledWith(data);
	});
});