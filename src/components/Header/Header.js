import React, { useState, useEffect } from 'react';
import logo from '../../utils/images/Logo White.png';
import menuIcon from '../../utils/icons/menuToggler.png';
import closeIcon from '../../utils/icons/closeBtn.png';
import './header.css';
import { Link, useLocation } from 'react-router-dom/dist';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuAnimating(false);
      }, 500); // Match this duration to your animation duration
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar sticky-top p-0 ${isScrolled ? 'navbar-color-onscroll' : 'navbar-default-color'}`}>
      <nav className="container-fluid p-0 navbar navbar-expand-md" aria-label="Main navigation">
        <Link to='/' className="navbar-brand">
          <img src={logo} alt="logo" height="54.37px" width="192px" />
        </Link>
        <button
          className={`navbar-toggler ${menuOpen ? 'open' : ''}`} type="button" onClick={toggleMenu} 
          aria-controls="navbarSupportedContent" aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ backgroundImage: `url(${menuOpen ? closeIcon : menuIcon})` }}></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''} ${menuAnimating ? 'hide' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav gap-4 mx-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link pb-0 ${location.pathname === "/" ? "active" : ""}`} aria-current="page" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/investments" className={`nav-link pb-0 ${location.pathname === "/investments" || location.pathname === '/investment_details' ? "active" : ""}`} onClick={toggleMenu}>Investments</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link pb-0 ${location.pathname === "/about" ? "active" : ""}`} onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={`nav-link pb-0 ${location.pathname === "/blog" || location.pathname === '/blog_details' ? "active" : ""}`} onClick={toggleMenu}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link pb-0 ${location.pathname === "/contact" ? "active" : ""}`} onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
