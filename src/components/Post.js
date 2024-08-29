import React from 'react';
import { Card } from 'react-bootstrap';

export const Post = () => {
  const post = {};
  return (
    <Card>
      <Card.Img variant="top" src={post.fimg_url} />
      <Card.Body>
        <Card.Title>{post.title.rendered}</Card.Title>
        <Card.Text
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        ></Card.Text>
      </Card.Body>
    </Card>
  );
};
