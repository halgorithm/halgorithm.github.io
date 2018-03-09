import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageFader from './ImageFader';
import './GameCard.css';

class GameCard extends Component {
  state = { curImageIndex: 0 };

  startHover = () => {
    this.incrementImageIndex();
    this.interval = setInterval(this.incrementImageIndex, 900);
  };

  stopHover = () => {
    clearInterval(this.interval);
    this.setState({ curImageIndex: 0 });
  };

  incrementImageIndex = () => {
    const { images } = this.props;
    const { curImageIndex } = this.state;

    this.setState({ curImageIndex: (curImageIndex + 1) % images.length });
  };

  render() {
    const { id, images, title } = this.props;
    const { curImageIndex } = this.state;

    return (
      <Link
        to={`/games/${id}`}
        className="game-card"
        onMouseEnter={this.startHover}
        onMouseLeave={this.stopHover}
      >
        <div>
          <ImageFader images={images} curImageIndex={curImageIndex} />
          <p>{title}</p>
        </div>
      </Link>
    );
  }
}

export default GameCard;
