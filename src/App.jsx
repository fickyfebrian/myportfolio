import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Portfolio from './pages/Portfolio';

function CustomScrollbar() {
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-height'));
      const thumbHeight = scrollbarHeight * 0.3; // 30% of scrollbar height
      const maxThumbPosition = scrollbarHeight - thumbHeight;
      const newPosition = scrollPercentage * maxThumbPosition;
      setThumbPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="custom-scrollbar">
      <div 
        id="custom-scrollbar-thumb" 
        style={{ top: `${thumbPosition}px` }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
      <CustomScrollbar />
    </Router>
  );
}

export default App;