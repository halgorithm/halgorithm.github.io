import React from 'react';
import { RaisedButton } from 'material-ui';
import { tags } from './data';

const TagFilter = ({ filterTagIds, onChange }) => {
  const tagEls = Object.values(tags).map(tag => (
    <RaisedButton
      key={tag.id}
      onClick={() => onChange(toggleTag(filterTagIds, tag.id))}
      primary={filterTagIds.includes(tag.id)}
      disableTouchRipple={true}
      style={{ margin: 4 }}
    >
      {tag.label}
    </RaisedButton>
  ));

  return <div>Filter by: {tagEls}</div>;
};

const toggleTag = (tagIds, tagId) => {
  const tagIndex = tagIds.indexOf(tagId);
  return tagIndex === -1
    ? tagIds.concat(tagId)
    : [...tagIds.slice(0, tagIndex), ...tagIds.slice(tagIndex + 1)];
};

export default TagFilter;
