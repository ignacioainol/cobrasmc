import React, { Fragment, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from 'react-simple-loading';
import { Helmet } from 'react-helmet-async';

export const HomeScreen = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(`API URL: ${apiUrl}`);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}?_embed`);
        if (!response.ok) {
          // oups! something went wrong
          return;
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingPosts(false);
      }
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

  const getFeaturedImage = (post) => {
    // Verifica si el post tiene media asociada y accede a la URL de la imagen
    if (
      post['_embedded'] &&
      post['_embedded']['wp:featuredmedia'] &&
      post['_embedded']['wp:featuredmedia'][0]
    ) {
      return post['_embedded']['wp:featuredmedia'][0].source_url;
    }
    // Devuelve una imagen por defecto si no hay imagen destacada
    return 'https://via.placeholder.com/200';
  };

  //if (loadingPosts) return <Loading color={'firebrick'} />;

  return (
    <Fragment>
      <Container className="main-wrapper">
        <Helmet>
          <title>Cobras MC | Home</title>
          <meta property="og:title" content="The Rock" />
          <meta property="og:type" content="video.movie" />
          <meta
            property="og:url"
            content="https://www.imdb.com/title/tt0117500/"
          />
          <meta
            property="og:image"
            content="https://ia.media-imdb.com/images/rock.jpg"
          />
        </Helmet>
        <Row className="gallery-wrapper">
          <ImageGallery autoPlay={true} items={images} slideInterval={6000} />
        </Row>

        <Row className="posts-wrapper">
          <h3 className="mb-4">Last News</h3>
          {loadingPosts && <Loading color={'firebrick'} />}
          {posts.map((post, index) => (
            <Col xl={3} md={6} sm={12} key={index} className="mb-4">
              <Link to={`/post/${post.slug}`}>
                <div
                  className="post"
                  style={{
                    backgroundImage: `url(${getFeaturedImage(post)})`,
                    backgroundSize: 'cover',
                    width: '100%',
                    backgroundPosition: 'center',
                    height: '200px',
                  }}
                ></div>
                <h5 className="text-center">{post.title.rendered}</h5>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};
