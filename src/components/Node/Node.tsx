import {faMinusSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import useSelect from "~/hooks/useSelect";
import React, {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';

import type {Props} from './types';

export const Node: FC<Props> = props => {
	const {children, data, expanded: externalExpanded, found, hasChildren, label, onClick, onExpand, selected} = props;
	const [components, theme] = useSelect('components', 'theme');
	const {
		CollapsedIcon,
		ExpandedIcon,
		NodeChildrenContainer,
		NodeContainer,
		NodeExpandIconContainer,
		NodeLabel,
		NodeLabelContainer
	} = components;
	const [expanded, setExpanded] = useState(externalExpanded);

	useEffect(() => setExpanded(externalExpanded), [externalExpanded]);

	const handleClick = useCallback(() => onClick(data), [onClick, data]);

	const handleCLickExpandIcon = useCallback(() => {
		const nextExpanded = !expanded;

		setExpanded(nextExpanded);
		onExpand({
			node: data,
			expanded: nextExpanded
		});
	}, [expanded, data, setExpanded]);

	const renderChildrenNodes = () => {
		if (expanded && hasChildren) {
			return (
				<NodeChildrenContainer className={theme.NodeChildrenContainer}>
					{children(data)}
				</NodeChildrenContainer>
			);
		}

		return null;
	};

	const renderExpandIcon = () => {
		if (hasChildren) {
			return expanded
				? <ExpandedIcon icon={faMinusSquare} onClick={handleCLickExpandIcon} />
				: <CollapsedIcon icon={faPlusSquare} onClick={handleCLickExpandIcon} />;
		}

		return null;
	};

	const labelCN = useMemo(() => cn({
		[theme.NodeLabel]: true,
		[theme.NodeLabel_found]: found,
		[theme.NodeLabel_selected]: selected
	}), [found, selected]);

	return (
		<NodeContainer className={theme.NodeContainer}>
			<NodeLabelContainer className={theme.NodeLabelContainer}>
				<NodeExpandIconContainer className={theme.NodeExpandIconContainer}>
					{renderExpandIcon()}
				</NodeExpandIconContainer>
				<NodeLabel className={labelCN} onClick={handleClick} title={label}>{label}</NodeLabel>
			</NodeLabelContainer>
			{renderChildrenNodes()}
		</NodeContainer>
	);
};

export default memo(Node);
