import React from 'react';
import { Link } from 'react-router-dom';
import './Aftercare.css';
// import MinorPiercing from './imgs/minor_piercing.jpg';
import TattooAftercare from './imgs/tattoo_aftercare.jpg';
import PiercingAftercare from './imgs/piercing_aftercare.jpg';

const Aftercare = () => {
    return (
        <div className="main">
            <div className="aftercare-page">
                <div className="hero-banner">
                    <div className="hero-text">
                        <h1>Aftercare Instructions</h1>
                        <p>
                            Proper aftercare is essential for maintaining the quality and longevity of your tattoos and piercings. Follow these tips to ensure your new body art heals perfectly.
                        </p>
                    </div>
                </div>

                <div className="aftercare-grid">
                    {/* <Link to='/aftercare-minor-piercing' className="artist-card">
                        <img src={MinorPiercing} alt='Minor Piercing' />
                        <h3>MINOR PIERCING</h3>
                    </Link> */}
                    <Link to='/aftercare-tattoo' className="artist-card">
                        <img src={TattooAftercare} alt='Tattoo Aftercare' />
                        <h3>TATTOO AFTERCARE</h3>
                    </Link>
                    <Link to='/aftercare-piercing' className="artist-card">
                        <img src={PiercingAftercare} alt='Piercing Aftercare' />
                        <h3>PIERCING AFTERCARE</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Aftercare;
