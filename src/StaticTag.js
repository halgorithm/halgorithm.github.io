import React from 'react';
import { FlatButton, FontIcon } from 'material-ui';
import { tags } from './data';

const StaticTag = ({ tagId }) => {
  const tag = tags[tagId];

  return (
    <FlatButton
      disabled={true}
      icon={
        tag ? <FontIcon className="material-icons">{tag.icon}</FontIcon> : null
      }
      labelPosition="after"
    >
      {tag ? tag.label : `Unknown tag ${tagId}`}
    </FlatButton>
  );
};

export default StaticTag;
