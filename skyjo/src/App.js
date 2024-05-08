// App.js

import './styles/App.css';
import Banner from './Banner';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Importez les composants pour les autres pages
import Products from './Products';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Banner />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
