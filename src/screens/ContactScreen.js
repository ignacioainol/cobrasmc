import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';

export const ContactScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div className="mb-3" style={{ fontSize: '1.5em' }}>
              <ReactTyped strings={['Contáctamos!']} typeSpeed={40} />
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Motivo</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};
