import React from 'react';

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
                    {/* <p className="description">
                        Mission Ink is looking to hire a new tattoo artist, and our door is always open to
                        talented guest artists that want to come visit San Francisco. Please <a href="mailto:info@missionink.com">email</a> us
                        with a brief bio and a link to your portfolio.
                    </p> */}
                    <h3 className="cta-title">Contact Us Now For Questions or to Schedule a Tattoo or Piercing</h3>
                    <button className="cta-button">Contact Us Today!</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
