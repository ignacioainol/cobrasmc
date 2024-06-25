import React, { Fragment } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const HomeScreen = () => {
  const images = [
    {
      original: './assets/images/slider/cobras-slider-2.jpeg',
      thumbnail: './assets/images/slider/cobras-slider-2.jpeg',
    },
    {
      original: './assets/images/slider/cobras-slider-1.png',
      thumbnail: './assets/images/slider/cobras-slider-1.png',
    },
    {
      original: './assets/images/slider/cobras-slider-4.jpeg',
      thumbnail: './assets/images/slider/cobras-slider-4.jpeg',
    },
    {
      original: './assets/images/slider/cobras-slider-5.jpg',
      thumbnail: './assets/images/slider/cobras-slider-5.jpg',
    },
  ];

  return (
    <Fragment>
      <ImageGallery autoPlay={true} items={images} slideInterval={6000} />
    </Fragment>
  );
};
