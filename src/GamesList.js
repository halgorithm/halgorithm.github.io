import React from 'react';
import GameCard from './GameCard';

const GamesList = ({ games }) => {
  const gameEls = Object.values(games).map(({ id, image, title }) => (
    <GameCard key={id} id={id} title={title} image={image} />
  ));

  return <div className="games-list">{gameEls}</div>;
};

export default GamesList;
