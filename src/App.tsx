import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Courses from './pages/Courses';
import Placement from './pages/Placement';
import CampusLife from './pages/CampusLife';
import About from './pages/About'; 
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import VirtualTourPage from './pages/VirtualTourPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/virtual-tour" element={<VirtualTourPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;