import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HomeScreen } from './screens/HomeScreen';
import { MembersScreen } from './screens/MembersScreen';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';
// import { ChangeLanguaje } from './components/ChangeLanguaje';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Container className="mt-4">
            <img src="" alt="" />

            <Navbar expand="lg">
            <Container>
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
                    <Link className="nav-link" to="/">
                       Inicio
                    </Link>
                    <Link className="nav-link" to="/members">
                      Integrantes
                      </Link>
                      <Link className="nav-link" to="/gallery">
                      Galería de Fotos
                      </Link>
                      <Link className="nav-link" to="/contacto">
                      Contacto
                    </Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </Container>
        </header>
        <main>
        <Container className="mt-3">
            <Routes>
              <Route>
                <Route path="/members" element={<MembersScreen />}></Route>
                <Route path="/" element={<HomeScreen />}></Route>
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
