import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ id, image, title }) => {
  return (
    <Link to={`/games/${id}`} className="game-card">
      <img src={image} alt={title} style={{ height: 100 }} />
      <p>{title}</p>
    </Link>
  );
};

export default GameCard;
