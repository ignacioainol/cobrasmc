import React, { Fragment, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch('http://localhost:8000/wp-json/wp/v2/posts');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    };

    loadPosts();
  }, []);
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
      {posts.map((post, index) => (
        <p>{post.title.rendered}</p>
      ))}
    </Fragment>
  );
};
