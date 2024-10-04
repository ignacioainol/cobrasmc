import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'react-simple-loading';

export const PostScreen = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(`API URL: ${apiUrl}?slug=${slug}&_embed`);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}?slug=${slug}&_embed`
        );
        if (!response.ok) {
          throw new Error('Error fetching post');
        }
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]); // Obtén el primer post que coincide con el slug
        } else {
          setError('Post not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const authorName =
    post && post._embedded && post._embedded.author
      ? post._embedded.author[0].name
      : 'Unknown author';

  const featuredImage = post?._embedded['wp:featuredmedia']
    ? post?._embedded['wp:featuredmedia'][0]?.source_url
    : 'default-image-url';

  if (loading) return <Loading color={'firebrick'} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {post && (
        <>
          <p>
            <strong>Por</strong> {authorName}
          </p>
          <p>Miercoles 04 septiembre de 2024 | 18:02</p>
          <div
            className="bgImage"
            style={{
              marginBottom: '2em',
              backgroundImage: `url(${featuredImage})`,
              backgroundSize: 'cover',
              width: '100%',
              backgroundPosition: 'center',
              height: '55vh',
            }}
          ></div>
          <h1>{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </>
      )}
    </div>
  );
};
