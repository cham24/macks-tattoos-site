import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MacksLogo from '../pages/imgs/macks_logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="navbar-header">
                <a href="/"><img src={MacksLogo} alt="Mack's Tattoos Logo" className="logo-img" /></a>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="/">THE SHOP</a>
                    </li>
                    <li>
                        <a href="/artists">ARTISTS</a>
                    </li>
                    <li>
                        <a href="/reviews">REVIEWS</a>
                    </li>
                    <li>
                        <a href="/aftercare">INFO & AFTERCARE</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACT</a>
                    </li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.instagram.com/macks.tattoos/" id="instagram-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/MACKSTATTOOSHOP/" id="facebook-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    {/* <a href="https://www.x.com" id="xtwitter-icon">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a> */}
                    <a href="https://www.yelp.com/biz/macks-tattoos-cedar-city" id="yelp-icon">
                        <FontAwesomeIcon icon={faYelp} />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
