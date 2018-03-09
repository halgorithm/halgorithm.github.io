import React from 'react';
import SadFace from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import GameCard from './GameCard';
import './GamesList.css';

const GamesList = ({ games }) => {
  if (games.length === 0)
    return (
      <div className="no-games">
        <h3 style={{ textAlign: 'center', marginTop: 40 }}>
          Couldn't find any games.
        </h3>
        <SadFace color="#333350" style={{ width: '100px', height: '100px' }} />
      </div>
    );

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
