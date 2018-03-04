import React from 'react';

const PlayGamePage = ({ title, entryPointUrl, config, children }) => {
  return (
    <div>
      <iframe src={entryPointUrl} />
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
};

export default PlayGamePage;
