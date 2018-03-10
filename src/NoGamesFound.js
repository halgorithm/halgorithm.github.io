import React from 'react';
// import SadFace from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import GamePad from 'material-ui/svg-icons/hardware/videogame-asset';
import './NoGamesFound.css';

const NoGamesFound = () => (
  <div className="no-games">
    <GamePad />
    <h3>Sorry, there aren't any games with all of those tags.</h3>
  </div>
);

export default NoGamesFound;
