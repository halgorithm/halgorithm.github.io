import React from 'react';
import { Typography, Button } from 'material-ui';
import {
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Slider from 'react-slick';
import StaticTag from './StaticTag';
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
  const tagEls = game.tags.map(tag => <StaticTag key={tag} tagId={tag} />);

  // <Slider {...sliderSettings}>{imageEls}</Slider>
  return (
    <div>
      <DialogTitle id="game-detail-dialog-title">{game.title}</DialogTitle>
      <DialogContent>
        <a href={`/games/${game.id}/play`}>
          <Button
            variant="raised"
            style={{
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            }}
          >
            Play Game
          </Button>
        </a>
        <DialogContentText>{game.description}</DialogContentText>
        <div>{tagEls}</div>
      </DialogContent>
    </div>
  );
};

export default GameDetail;
