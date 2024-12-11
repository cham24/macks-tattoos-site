import React from 'react';
import './AftercarePages.css';

const MinorPiercing = () => {
    return (
        <div className="main">
            <div className="minor-piercing-page">
                <header className="minor-piercing-header">
                    <h1>MINOR PIERCING</h1>
                </header>

                <section className="minor-piercing-content">
                    <p>
                        <strong>Here is what we need if you are a minor and would like to get pierced:</strong>
                    </p>
                    <ol>
                        <li>Picture I.D. of minor</li>
                        <li>The minor's birth certificate (or original court documentation of custody)</li>
                        <li>Parent that is named on birth certificate present and their I.D.</li>
                    </ol>
                    <p>
                        For minors under 15 years of age, we do not pierce anything besides ears. Minors must be at least 16 years of age for any other piercings.
                        We do not do septum, tongue, anchor, or nipple piercings on anyone under 18 years of age. We do not do any genital piercings at this time.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MinorPiercing;