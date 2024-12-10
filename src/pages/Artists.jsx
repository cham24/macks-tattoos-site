import React from 'react';
import { Link } from 'react-router-dom';
import './Artists.css';
// import ArtistImg from '../pages/imgs/artist_image.png';

const Artists = () => {
    const artists = [
        { name: 'SAMPLE NAME 1', photo: 'https://via.placeholder.com/200', link: '/mack' },
        { name: 'SAMPLE NAME 2', photo: 'https://via.placeholder.com/200', link: '/mack' },
        { name: 'SAMPLE NAME 3', photo: 'https://via.placeholder.com/200', link: '/mack' },
        { name: 'SAMPLE NAME 4', photo: 'https://via.placeholder.com/200', link: '/mack' },
        { name: 'SAMPLE NAME 5', photo: 'https://via.placeholder.com/200', link: '/mack' },
    ];

    return (
        <div className="main">
            <div className="artists-page">
                <div className="hero-banner">
                    <div className="hero-text">
                        <h1>Meet Our Talented Artists</h1>
                        <p>
                            Each of our artists brings their own unique style and talent to create exceptional tattoos. From intricate designs to bold artwork, they are here to turn your vision into reality.
                        </p>
                    </div>
                </div>

                <div className="artists-grid">
                    {artists.map((artist, index) => (
                        <Link to={artist.link} key={index} className="artist-card">
                            <img src={artist.photo} alt={artist.name} />
                            <h3>{artist.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Artists;
