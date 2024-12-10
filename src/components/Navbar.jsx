import React, { } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import MacksLogo from './imgs/macks_tats_logo.png'

function Navbar() {
    return (
        <div className="main">
            <div className="sidenav">
                <div className="logo">
                    <h1>MACK'S TATTOOS</h1>
                    <img src={MacksLogo} alt="Mack's Tattoos Logo" />
                    <p>TATTOO & PIERCING</p>
                </div>

                <nav className="menu">
                    <a href="#shop">THE SHOP</a>
                    <a href="#artists">ARTISTS &gt;</a>
                    <a href="#reviews">REVIEWS</a>
                    {/* <a href="#press">PRESS & ARTICLES</a> */}
                    <a href="#info">INFO & AFTERCARE &gt;</a> 
                    <a href="/contact">CONTACT</a>
                </nav>

                <div className="social-icons">
                    {/* <a href="#email"><span className="icon">📧</span></a> */}
                    <a href="https://www.instagram.com/macks.tattoos/" id="instagram-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/MACKSTATTOOSHOP/" id="facebook-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#yelp" id="xtwitter-icon">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
