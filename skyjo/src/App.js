
import './styles/App.css';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Catalogue from './Catalogue';
import About from './About';
import Contact from './Contact';
import ShoppingCart from './ShoppingCart';
import Favorite from './Favorite';
import logo from './assets/logoshop.png';
import Catalogue from './Catalogue';


function App() {
  return (
    <Router>
      <div>
        <nav className="top-nav">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="logo-name">SKYJO</h1>
          </div>
          <ul className="nav-links">
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
            <li>
              <Link to="/shopping cart">Shopping-Cart</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalogue />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping cart" element={<ShoppingCart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
    
  );
}

export default App;
