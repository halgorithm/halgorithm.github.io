import React from 'react';
import { games } from './data';

const PlayGamePage = ({ match }) => {
  const { gameId } = match.params;
  const game = games[gameId];
  const config = {};
  const urlWithConfig = game.url + `?config=${config}`;

  return (
    <div>
      <div>
        <a href="/games">Back to games</a>
        <span>
          <p>{game.title}</p>
        </span>
      </div>
      <iframe src={urlWithConfig} width={768} height={432} frameBorder={0} />
      <div>{game.playText}</div>
    </div>
  );
};

export default PlayGamePage;
