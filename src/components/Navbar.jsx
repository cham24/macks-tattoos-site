import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import MacksLogo from './imgs/macks_tats_logo.png'

function Navbar() {
    const [activeTab, setActiveTab] = useState('');
    const [showArtistsMenu, setShowArtistsMenu] = useState(false);
    const [showInfoMenu, setShowInfoMenu] = useState(false);

    const toggleSubMenu = (menu) => {
        if (menu === 'artists') {
            setShowArtistsMenu(!showArtistsMenu);
            setShowInfoMenu(false);
        } else if (menu === 'info') {
            setShowInfoMenu(!showInfoMenu);
            setShowArtistsMenu(false);
        }
        // setActiveTab(tab);
        // if (tab === 'artists') {
        //     setShowArtistsMenu((prev) => !prev); // Toggle Artists menu
        //     setShowInfoMenu(false); // Close Info menu if open
        // } else if (tab === 'info') {
        //     setShowInfoMenu((prev) => !prev); // Toggle Info menu
        //     setShowArtistsMenu(false); // Close Artists menu if open
        // } else {
        //     setShowArtistsMenu(false);
        //     setShowInfoMenu(false);
        // }
    };

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
                                href="#artists"
                                className={activeTab === 'artists' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('artists');
                                    toggleSubMenu('artists')
                                }
                                }
                            >
                                ARTISTS &gt;
                            </a>
                            <ul
                                className={`submenu ${showArtistsMenu ? 'open' : ''}`}
                                style={{
                                    height: showArtistsMenu ? 'auto' : '0',
                                    overflow: 'hidden',
                                    marginBottom: '-10px'
                                }}
                            >
                            {/* <ul className={`submenu ${showArtistsMenu ? 'open' : ''}`}> */}
                                <li><a href="mack" style={{ marginTop: '-10px' }}>Mack</a></li>
                                <li><a href="starr">Starr</a></li>
                                <li><a href="precious">Precious</a></li>
                                <li><a href="justice">Justice</a></li>
                                <li><a href="#rigers">Hot Guy</a></li>
                            </ul>
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
                                href="#info"
                                className={activeTab === 'info' ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab('info');
                                    toggleSubMenu('info');
                                }}
                            >
                                INFO & AFTERCARE &gt;
                            </a>
                            <ul
                                className={`submenu ${showInfoMenu ? 'open' : ''}`}
                                style={{
                                    height: showInfoMenu ? 'auto' : '0',
                                    overflow: 'hidden',
                                    marginBottom: '-10px'
                                }}
                            >
                                <li><a href="#healing" style={{ marginTop: '-10px' }}>Healing</a></li>
                                <li><a href="#maintenance">Maintenance</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
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
                    <a href="#yelp" id="xtwitter-icon">
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
