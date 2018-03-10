import React from 'react';
import GameCard from './GameCard';
import './GamesList.css';

const GamesList = ({ games }) => {
  const gameEls = Object.values(games).map(
    ({ id, image, extraImages, title, date }) => (
      <GameCard
        key={id}
        gameId={id}
        title={title}
        images={[image, ...extraImages]}
        date={date}
      />
    )
  );

  return <div className="games-list">{gameEls}</div>;
};

export default GamesList;
