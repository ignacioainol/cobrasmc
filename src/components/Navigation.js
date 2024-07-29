import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg">
      <Container className="mt-3">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="/assets/images/logo-cobras.png"
              height="200"
              className="d-inline-block align-top animate__animated animate__tada"
              alt="Cobras MC logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <div className="itemsNavbar">
              <Link
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }`}
                to="/"
              >
                INICIO
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === '/history' ? 'active' : ''
                }`}
                to="/history"
              >
                HISTORIA
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === '/members' ? 'active' : ''
                }`}
                to="/members"
              >
                INTEGRANTES
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === '/gallery' ? 'active' : ''
                }`}
                to="/gallery"
              >
                GALERÍA
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === '/contacto' ? 'active' : ''
                }`}
                to="/contacto"
              >
                CONTACTO
              </Link>
            </div>
          </Nav>
          <div className="container-rrss-header">
            <ul className="rrss-header">
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
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
