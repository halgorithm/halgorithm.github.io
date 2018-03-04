import React from 'react';
import { RaisedButton } from 'material-ui';
import Slider from 'react-slick';
// import 'react-slick/index.css';

const GameDetail = ({ game }) => {
  const images = [game.image, ...game.extraImages];
  const imageEls = images.map((src, i) => <img key={i} src={src} alt="" />);
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    dots: true
  };

  return (
    <div>
      {/* <Slider {...sliderSettings}>{imageEls}</Slider> */}
      <a href={`/games/${game.id}/play`}>
        <RaisedButton>Play Game</RaisedButton>
      </a>
      <p>{game.title}</p>
      <p>{game.description}</p>
    </div>
  );
};

export default GameDetail;
