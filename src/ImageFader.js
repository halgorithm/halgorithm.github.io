import React from 'react';
import './ImageFader.css';

const ImageFader = ({ images, curImageIndex }) => {
  const overlayImages = images
    .slice(1, images.length)
    .map((src, i) => (
      <img
        key={i}
        src={src}
        alt=""
        className={`overlay${i + 1 === curImageIndex ? ' visible' : ''}`}
      />
    ));

  return (
    <div className="image-fader">
      <img src={images[0]} alt="" />
      {overlayImages}
    </div>
  );
};

export default ImageFader;
