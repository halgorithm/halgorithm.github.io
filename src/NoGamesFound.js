import React from 'react';
// import SadFace from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import { VideogameAsset } from 'material-ui-icons';
import './NoGamesFound.css';

const NoGamesFound = () => (
  <div className="no-games">
    <VideogameAsset />
    <h3>Sorry, there aren't any games with all of those tags.</h3>
  </div>
);

export default NoGamesFound;
