import React from 'react';
import './ImageFader.css';

const ImageFader = ({ images, curImageIndex }) => {
  const overlayImages = images.map((src, i) => (
    <div key={i} className="overlay">
      <img
        src={src}
        alt=""
        className={`${i === curImageIndex ? 'visible' : ''}`}
      />
    </div>
  ));

  return <div className="image-fader">{overlayImages}</div>;
};

export default ImageFader;
