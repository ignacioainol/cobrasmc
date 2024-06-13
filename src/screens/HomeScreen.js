import React, { Fragment } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const HomeScreen = () => {
  const images = [
    {
      original: './assets/images/cobras-slider-2.jpeg',
      thumbnail: './assets/images/cobras-slider-2.jpeg',
    },
    {
      original: './assets/images/cobras-slider-1.png',
      thumbnail: './assets/images/cobras-slider-1.png',
    },
    {
      original: './assets/images/cobras-slider-4.jpeg',
      thumbnail: './assets/images/cobras-slider-4.jpeg',
    },
    {
      original: './assets/images/cobras-slider-5.jpg',
      thumbnail: './assets/images/cobras-slider-5.jpg',
    },
  ];

  return (
    <Fragment>
      <ImageGallery items={images} />
    </Fragment>
  );
};
