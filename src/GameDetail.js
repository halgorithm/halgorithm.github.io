import React from 'react';
import { FlatButton, RaisedButton } from 'material-ui';
import Slider from 'react-slick';
// import 'react-slick/index.css';
import { tags } from './data';

const GameDetail = ({ game }) => {
  const images = [game.image, ...game.extraImages];
  const imageEls = images.map((src, i) => <img key={i} src={src} alt="" />);
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    dots: true
  };
  const tagEls = game.tagIds.map(tagId => (
    <FlatButton key={tagId} disabled={true}>
      {tags[tagId].label}
    </FlatButton>
  ));

  return (
    <div>
      <Slider {...sliderSettings}>{imageEls}</Slider>
      <a href={`/games/${game.id}/play`}>
        <RaisedButton primary>Play Game</RaisedButton>
      </a>
      <p>{game.title}</p>
      <p>{game.description}</p>
      <div>{tagEls}</div>
    </div>
  );
};

export default GameDetail;
