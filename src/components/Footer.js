import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#000000' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Información de contacto</h5>
            <p>Dirección:Juan Martínez de Rozas 943</p>
            {/* <p>Teléfono: 555-123-456</p> */}
            <p>Email: cobrasmc@gmail.com</p>
          </Col>
          <Col md={4}>
            <h5>Síguenos en redes sociales</h5>
            <ul>
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">
              © {new Date().getFullYear()} Cobras MC ®. Todos los derechos
              reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
