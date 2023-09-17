import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App" style={{ width: '100%' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<h1>Not Found</h1>} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
