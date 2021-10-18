import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import useMultiSelect from "~/plugins/MultiSelect/hooks/useMultiSelect";
import useMultiSelectPlugin from "~/plugins/MultiSelect/hooks/useMultiSelectPlugin";
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Value} from "~/types";

import {TagsComponent} from './types';

export const Tags: TagsComponent = (props) => {
	const {onRemove, tagWidth, values} = props;
	const [tagsCount, setTagsCount] = useState(0);
	const [components, theme] = useMultiSelect('components', 'theme');
	const {AllTagsContainer, ShowAllTagsIcon, ShowAllTagsTag, TagContainer, TagsContainer, ValueTag} = components;
	const [toggleShowAllTags, showAllTags] = useMultiSelectPlugin('toggleShowAllTags', 'showAllTags');
	const tagsRef = useRef<HTMLDivElement>(null);
	const allTagsRef = useRef<HTMLDivElement>(null);
	const tags = useMemo(() => values.slice(0, tagsCount), [tagsCount, values]);

	useEffect(() => {
		const {current} = tagsRef;

		if (current && tagWidth > 0) {
			const newTagsCount = Math.floor(current.clientWidth / tagWidth);

			setTagsCount(Math.max(newTagsCount, 0));
		}
	}, [tagWidth]);

	const renderAllTags = () => showAllTags && (
		<AllTagsContainer className={theme.AllTagsContainer} ref={allTagsRef}>
			{values.map(renderValueTag)}
		</AllTagsContainer>
	);

	const renderValueTag = (value: Value, index: number) => (
		<TagContainer className={theme.TagContainer} key={index} style={{width: tagWidth}}>
			<ValueTag className={theme.ValueTag} index={index} onRemove={onRemove} value={value} />
		</TagContainer>
	);

	const renderShowAllTagsTag = () => {
		if (tags.length < values.length) {
			return (
				<TagContainer className={theme.TagContainer}>
					<ShowAllTagsTag className={theme.ShowAllTagsTag} onClick={toggleShowAllTags}>
						<ShowAllTagsIcon icon={faEllipsisH} />
					</ShowAllTagsTag>
				</TagContainer>
			);
		}

		return null;
	};

	const renderTags = () => tags.length > 0 && tags.map(renderValueTag);

	return (
		<TagsContainer className={theme.TagsContainer} ref={tagsRef}>
			{renderTags()}
			{renderShowAllTagsTag()}
			{renderAllTags()}
		</TagsContainer>
	);
};

export default Tags;
