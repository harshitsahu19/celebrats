import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeTopBar = () => setShowTopBar(false);

  return (
    <>
      {/* Top Bar */}

      {showTopBar && (
        <div className="celeb-topBar" id="celebTopBar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <span>
                  “Your celebration starts here – Celebrats connects you to the best event services in one place!”
                </span>
              </div>
              <div className="col-auto">
                <button className="celeb-closeBtn" onClick={closeTopBar}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className={`navbar navbar-expand-lg celeb-navBar ${isSticky ? 'celeb-sticky' : ''}`} id="celebNavBar">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand p-0" to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#celebMobileSidebar"
          >
            <i className="fas fa-bars toogle-icon"></i>
          </button>

          {/* Desktop menu */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link celeb-navLink${location.pathname === '/home' ? ' celeb-active-link' : ''}`}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link celeb-navLink${location.pathname === '/service' ? ' celeb-active-link' : ''}`}
                  to="/service"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link celeb-navLink" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link celeb-navLink" to="/contactUs">
                  Contact Us
                </Link>
              </li>
              {/* Remove Our Work ScrollLink or convert to Link if needed */}
            </ul>
            {/* Quote button */}
            <a href="tel:+918899887766" className="celeb-quote-wrapper-btn">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className="offcanvas offcanvas-end celeb-offcanvas" tabIndex="-1" id="celebMobileSidebar">
        <div className="offcanvas-header border-bottom border-secondary mb-4">
          <Link className="navbar-brand p-0" to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>
          <button type="button" className="btn-close text-dark" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column">
            <Link
              className={`nav-link celeb-navLink mb-3${location.pathname === '/home' ? ' celeb-active-link' : ''}`}
              to="/home"
              data-bs-dismiss="offcanvas"
            >
              Home
            </Link>
            <Link className="nav-link celeb-navLink mb-3" to="/aboutUs" data-bs-dismiss="offcanvas">
              About Us
            </Link>
            <Link
              className={`nav-link celeb-navLink mb-3${location.pathname === '/service' ? ' celeb-active-link' : ''}`}
              to="/service"
              data-bs-dismiss="offcanvas"
            >
              Services
            </Link>
            <Link className="nav-link celeb-navLink mb-3" to="/contactUs" data-bs-dismiss="offcanvas">
              Contact Us
            </Link>
            {/* Remove Our Work ScrollLink or convert to Link if needed */}
            <a href="tel:+918899887766" className="btn celeb-quoteBtn" data-bs-dismiss="offcanvas">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 