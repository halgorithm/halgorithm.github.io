import React from 'react';
import { tags } from './data';
import ClickableTag from './ClickableTag';

const TagFilter = ({ filterTagIds, onChange }) => {
  const tagEls = Object.values(tags).map(({ id }) => (
    <ClickableTag
      key={id}
      tagId={id}
      highlight={filterTagIds.includes(id)}
      onClick={() => onChange(toggleTag(filterTagIds, id))}
    />
  ));

  return <div>Filter by: {tagEls}</div>;
};

const toggleTag = (tagIds, tagId) => {
  console.log('bitch!');
  const tagIndex = tagIds.indexOf(tagId);
  return tagIndex === -1
    ? tagIds.concat(tagId)
    : [...tagIds.slice(0, tagIndex), ...tagIds.slice(tagIndex + 1)];
};

export default TagFilter;
