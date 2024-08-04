import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';

const Navigation = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);

  return (
    <Navbar expand="lg" expanded={expanded}>
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

        <div className="containerToDeath">
          <ReactTyped
            className="toDeath"
            strings={['33 To Death!']}
            typeSpeed={40}
          />
        </div>

        <Navbar.Toggle
          onClick={toggleNavbar}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <div className="itemsNavbar">
              <NavItem>
                <Nav.Link
                  as={Link}
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  INICIO
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link
                  as={Link}
                  to="/history"
                  className={location.pathname === '/history' ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  HISTORIA
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link
                  as={Link}
                  to="/members"
                  className={location.pathname === '/members' ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  INTEGRANTES
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link
                  as={Link}
                  to="/gallery"
                  className={location.pathname === '/gallery' ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  GALERÍA
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link
                  as={Link}
                  to="/contacto"
                  className={location.pathname === '/contacto' ? 'active' : ''}
                  onClick={() => setExpanded(false)}
                >
                  CONTACTO
                </Nav.Link>
              </NavItem>
              <NavItem className="container-rrss-header">
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
              </NavItem>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
