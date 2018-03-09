import React from 'react';
import GameCard from './GameCard';
import './GamesList.css';

const GamesList = ({ games }) => {
  if (games.length === 0)
    return (
      <h3 style={{ textAlign: 'center', marginTop: 40 }}>No games found.</h3>
    );

  const gameEls = Object.values(games).map(
    ({ id, image, extraImages, title }) => (
      <GameCard
        key={id}
        id={id}
        title={title}
        images={[image, ...extraImages]}
      />
    )
  );

  return <div className="games-list">{gameEls}</div>;
};

export default GamesList;
