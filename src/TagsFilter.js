import React from 'react';
import { observer, inject } from 'mobx-react';
import { Typography } from 'material-ui';
import { tags } from './data';
import ClickableTag from './ClickableTag';

const TagFilter = ({ store }) => {
  const { filterTags, toggleFilterTag } = store;

  const tagEls = Object.values(tags).map(({ id }) => (
    <ClickableTag
      key={id}
      tagId={id}
      highlight={filterTags.includes(id)}
      onClick={() => toggleFilterTag(id)}
    />
  ));

  return (
    <div>
      <Typography variant="body1" align="center">
        Filter by:
      </Typography>
      <span>{tagEls}</span>
    </div>
  );
};

// const toggleTag = (tagIds, tagId) => {
//   const tagIndex = tagIds.indexOf(tagId);
//   return tagIndex === -1
//     ? tagIds.concat(tagId)
//     : [...tagIds.slice(0, tagIndex), ...tagIds.slice(tagIndex + 1)];
// };

export default inject('store')(observer(TagFilter));
