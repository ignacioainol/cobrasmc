import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'react-simple-loading';

export const PostScreen = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/wp-json/wp/v2/posts?slug=${slug}&_embed`
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

  if (loading) return <Loading color={'firebrick'} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {post && (
        <>
          <div>
            <img src={post.fimg_url} alt="" />
          </div>
          <h1>{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </>
      )}
    </div>
  );
};
