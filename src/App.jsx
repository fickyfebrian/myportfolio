import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
      <Footer  />
    </Router>
  );
}

export default App
