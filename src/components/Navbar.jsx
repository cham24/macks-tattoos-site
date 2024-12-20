import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import MacksLogo from './imgs/macks_tats_logo.png'

function Navbar() {
    const [activeTab, setActiveTab] = useState('');

    return (
        <div className="main">
            <div className="sidenav">
                <div className="logo">
                    <h1>MACK'S TATTOOS</h1>
                    <img src={MacksLogo} alt="Mack's Tattoos Logo" />
                    <p>TATTOO & PIERCING</p>
                </div>

                <div className="nav-menu">
                    <ul>
                        <li>
                            <a
                                href="/"
                                className={activeTab === '' ? 'active' : ''}
                                onClick={() => setActiveTab('')}
                            >
                                THE SHOP
                            </a>
                        </li>
                        <li>
                            <a
                                href="artists"
                                className={activeTab === 'artists' ? 'active' : ''}
                                onClick={() => setActiveTab('artists')}
                            >
                                ARTISTS
                            </a>
                        </li>
                        <li>
                            <a
                                href="reviews"
                                className={activeTab === 'reviews' ? 'active' : ''}
                                onClick={() => setActiveTab('reviews')}
                            >
                                REVIEWS
                            </a>
                        </li>
                        <li>
                            <a
                                href="aftercare"
                                className={activeTab === 'aftercare' ? 'active' : ''}
                                onClick={() => setActiveTab('aftercare')}
                            >
                                INFO & AFTERCARE
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className={activeTab === 'contact' ? 'active' : ''}
                                onClick={() => setActiveTab('contact')}
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="social-icons">
                    {/* <a href="#email"><span className="icon">📧</span></a> */}
                    <a href="https://www.instagram.com/macks.tattoos/" id="instagram-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/MACKSTATTOOSHOP/" id="facebook-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.x.com" id="xtwitter-icon">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://www.yelp.com/biz/macks-tattoos-cedar-city" id="yelp-icon">
                        <FontAwesomeIcon icon={faYelp} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
