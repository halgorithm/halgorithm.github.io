import React from 'react';
import { Button, Icon } from 'material-ui';
import { tags } from './data';
import './ClickableTag.css';

const ClickableTag = ({ tagId, onClick, disabled, highlight }) => {
  const tag = tags[tagId];

  return (
    <Button
      variant="raised"
      className="tag"
      color={highlight ? 'secondary' : 'default'}
      disabled={disabled}
      onClick={onClick}
    >
      {tag ? tag.label : `Unknown tag ${tagId}`}
      <Icon>{tag && tag.icon}</Icon>
    </Button>
  );
};

export default ClickableTag;
