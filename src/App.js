import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';
import Root from './Pages/root';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Sponsors from './Pages/Sponsors';
import SpotGames from './Pages/SpotGames';
import Contact from './Pages/Contact';
import Preloader from './Components/Preloaders/Preloader';
import NotFound from './Components/Error/NotFound';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulating content loading with a delay (you can replace this with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="App">
      {contentLoaded ? (
        <Router>
          <Navbar />
          <Analytics />
          <SpeedInsights/>
          <Routes>
            <Route path="/" element={<Root/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Sponsors" element={<Sponsors/>}/>
            <Route path="/SpotGames" element={<SpotGames/>}/>
            <Route path="/Contact" element={<Contact />} />
            {/* Catch-all route for paths not matching any above */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;
