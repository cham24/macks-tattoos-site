import React from 'react';
import { Link } from 'react-router-dom';
import './Artists.css';
import MackImg from './imgs/mack.png';
import StarrImg from './imgs/starr.png';
import PreciousImg from './imgs/precious.png';
import JusticeImg from './imgs/justice.jpg';
import MattImg from './imgs/artist_image.png';

const Artists = () => {
    return (
        <div className="main">
            <div className="artists-page">
                <div className="hero-banner artists-banner">
                    <div className="hero-text">
                        <h1>Meet Our Talented Artists</h1>
                        <p>
                            Each of our artists brings their own unique style and talent to create exceptional tattoos. From intricate designs to bold artwork, they are here to turn your vision into reality.
                        </p>
                    </div>
                </div>

                <div className="artists-grid">
                <Link to='/mack' className="artist-card">
                        <img src={MackImg} alt="MACK" />
                        <h3>MACK</h3>
                    </Link>                   
                     <Link to='/starr' className="artist-card">
                        <img src={StarrImg} alt="STARR" />
                        <h3>STARR</h3>
                    </Link>
                    <Link to='/precious' className="artist-card">
                        <img src={PreciousImg} alt="PRECIOUS" />
                        <h3>PRECIOUS</h3>
                    </Link>
                    <Link to='/justice' className="artist-card">
                        <img src={JusticeImg} alt="JUSTICE" />
                        <h3>JUSTICE</h3>
                    </Link>
                    <Link to='/matt' className="artist-card">
                        <img src={MattImg} alt="MATT" />
                        <h3>MATT</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Artists;
