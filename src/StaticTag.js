import React from 'react';
import { Button, Icon } from 'material-ui';
import { tags } from './data';

const StaticTag = ({ tagId }) => {
  const tag = tags[tagId];

  return (
    <Button variant="flat" disabled>
      {tag ? tag.label : `Unknown tag ${tagId}`}
      <Icon>{tag && tag.icon}</Icon>
    </Button>
  );
};

export default StaticTag;
