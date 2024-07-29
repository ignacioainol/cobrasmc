import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { HomeScreen } from './screens/HomeScreen';
import { MembersScreen } from './screens/MembersScreen';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';
import { ContactScreen } from './screens/ContactScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import Navigation from './components/Navigation';

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
        <div className="container">
          <header>
            <Navigation />
          </header>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route>
                  <Route path="/members" element={<MembersScreen />}></Route>
                  <Route path="/contacto" element={<ContactScreen />}></Route>
                  <Route path="/gallery" element={<GalleryScreen />}></Route>
                  <Route path="/" element={<HomeScreen />}></Route>
                </Route>
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
