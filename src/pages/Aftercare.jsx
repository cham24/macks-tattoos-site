import React from 'react';
import { Link } from 'react-router-dom';
import './Aftercare.css';
import MinorPiercing from './imgs/minor_piercing.jpg';
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

                <div className="artists-grid">
                    <Link to='/aftercare-minor-piercing' className="artist-card">
                        <img src={MinorPiercing} alt='Minor Piercing' />
                        <h3>MINOR PIERCING</h3>
                    </Link>
                    <Link to='/aftercare-tattoo' className="artist-card">
                        <img src={TattooAftercare} alt='Tattoo Aftercare' />
                        <h3>TATTOO AFTERCARE</h3>
                    </Link>
                    <Link to='/aftercare-piercing' className="artist-card">
                        <img src={PiercingAftercare} alt='Piercing Aftercare' />
                        <h3>PIERCING AFTERCARE</h3>
                    </Link>
                </div>

                {/* <div className="aftercare-content">
                    <section className="aftercare-section">
                        <h2>For Tattoos</h2>
                        <p>
                            - Keep the tattoo clean and dry for the first 24 hours.<br />
                            - Wash gently with unscented soap and lukewarm water.<br />
                            - Apply a thin layer of tattoo aftercare ointment as recommended.<br />
                            - Avoid direct sunlight, swimming, and tight clothing over the area.<br />
                            - Do not scratch or pick at scabs.<br />
                            - Follow your artist's specific aftercare recommendations.
                        </p>
                    </section>

                    <section className="aftercare-section">
                        <h2>For Piercings</h2>
                        <p>
                            - Clean the piercing twice daily with saline solution.<br />
                            - Avoid touching the piercing with unclean hands.<br />
                            - Avoid swimming pools, hot tubs, and other bodies of water.<br />
                            - Do not remove or change the jewelry until the piercing is fully healed.<br />
                            - If you notice any signs of infection, contact your piercer immediately.<br />
                            - Follow your piercer's specific aftercare recommendations.
                        </p>
                    </section>
                </div> */}
            </div>
        </div>
    );
};

export default Aftercare;
