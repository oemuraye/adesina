import React, { useState, useEffect } from 'react';

import logo from '../../utils/images/Logo White.png';

import './header.css';
import { Link, useLocation } from 'react-router-dom/dist';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
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

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
           </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-4 mx-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link pb-0 ${location.pathname === "/" ? "active" : ""}`} aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/investments" className={`nav-link pb-0 ${location.pathname === "/investments" ? "active" : ""}`}>Investments</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link pb-0 ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className={`nav-link pb-0 ${location.pathname === "/blog" ? "active" : ""}`}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link pb-0 ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Header;