import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Información de contacto</h5>
            <p>
              <i className="fa-solid fa-location-dot"></i> Juan Martínez de
              Rozas 943
            </p>
            {/* <p>Teléfono: 555-123-456</p> */}
            <p>
              <i className="fa-solid fa-envelope"></i> cobrasmc@gmail.com
            </p>
          </Col>
          <Col md={4}>
            <h5>Síguenos en redes sociales</h5>
            <ul className="rrss-footer">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100074688323318"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/cobras_concepcion_mc/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
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
