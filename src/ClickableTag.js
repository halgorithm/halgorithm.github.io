import React from 'react';
import { RaisedButton, FontIcon } from 'material-ui';
import { tags } from './data';
import './ClickableTag.css';

const ClickableTag = ({ tagId, onClick, disabled, highlight }) => {
  const tag = tags[tagId];

  return (
    <RaisedButton
      className="tag"
      disableTouchRipple={true}
      primary={highlight}
      disabled={disabled}
      onClick={onClick}
      icon={
        tag ? <FontIcon className="material-icons">{tag.icon}</FontIcon> : null
      }
      labelPosition="before"
    >
      {tag ? tag.label : `Unknown tag ${tagId}`}
    </RaisedButton>
  );
};

export default ClickableTag;
