import React from 'react';
import ImageGallery from '../components/ImageGallery';

function Home() {
    return (
        <div className="main">
            <div className="homepage">
                <div className="hero-section">
                    <div className="overlay">
                        <h1 className="title">MACK'S TATTOO & PIERCING</h1>
                        <p className="subtitle">
                            TATTOO SHOP IN THE HEART OF IN CEDAR CITY, UT
                        </p>
                    </div>
                </div>

                <div className="content-section">
                    <h3 className="cta-title">Contact Us Now For Questions or to Schedule a Tattoo or Piercing Consultation</h3>
                    <a id="cta-button" href="./contact">Contact Us Today!</a>
                </div>

                <div className="gallery-section">
                    <h2>Our Work</h2>
                    <ImageGallery />
                </div>

                <div className="bottom-info">
                    <div className="bottom-overlay">
                        <p>
                            Located in the heart of Cedar City, Mack's Tattoos and Piercing studio is the place to satisfy your craving for body art.
                        </p>
                        <p>
                            We have a team of fun, artistic, and very talented artists. Check out our Yelp page and Reviews tab to see what our awesome clients have to say about us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
