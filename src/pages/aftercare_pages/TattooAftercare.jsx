import React from 'react';
import './AftercarePages.css';

const TattooAftercare = () => {
    return (
        <div className="main">
            <div className="tattoo-aftercare-page">
                <header className="tattoo-aftercare-header">
                    <h1>TATTOO AFTERCARE</h1>
                </header>

                <section className="tattoo-aftercare-content">
                    <p>
                        Thanks for getting tattooed at Mack's Tattoos! Here are some aftercare instructions and reminders to make your healing process as painless as possible.
                    </p>

                    <div className="aftercare-option">
                        <h2>OPTION 1:</h2>
                        <p>
                            If your artist used Tegaderm to cover the tattoo (a breathable adhesive bandage), try to keep the Tegaderm on for up to five days (please note that it is completely normal for it to fill with black liquid/plasma). Do not submerge it in water for two days (showers are fine). It is also normal for the Tegaderm to start coming off after a few days, so don't worry if it doesn't stay on for the full week. You will want to carefully remove the Tegaderm, slowly pulling it away from your skin - do not rip it off. Removing the bandage in the shower with soap and water will help it come off easier. After the Tegaderm is off, carefully clean the tattoo with a mild unscented antibacterial soap. Follow up with a light layer of lotion or tattoo aftercare.
                        </p>
                    </div>

                    <div className="aftercare-option">
                        <h2>OPTION 2:</h2>
                        <p>
                            <strong>1st day:</strong> Leave the bandage on for two hours or until you get home. Wash your hands prior to removing the bandage. Immediately wash the tattoo with liquid antibacterial soap to remove any ointment, blood, or plasma, and to completely clean the tattoo. Repeat until the tattoo is no longer slimy or glazed. (Do not use a washcloth on the tattoo until it is completely healed.) Let air dry. Do not re-bandage the tattoo.<br />
                            <strong>2nd - 3rd day:</strong> Repeat the cleaning procedure twice per day, washing with antibacterial soap as recommended by the artist. Remember to use freshly washed hands to clean the tattoo. In addition, apply a thin layer of Aquaphor or unscented lotion twice a day over the freshly washed tattoo.<br />
                            <strong>4th day:</strong> Use Aquaphor or unscented lotion and apply a very light layer to the tattoo 2-3 times per day until the tattoo has healed. Always use freshly washed hands.
                        </p>
                    </div>

                    <div className="aftercare-tips">
                        <h2>Additional tips:</h2>
                        <p>
                            Do not expose the tattoo to sunlight for at least two weeks or until the tattoo is healed. To preserve your tattoo, once it is healed, apply sunblock to the tattoo if it will be exposed to the sun. Do not soak your tattoo in water (IE: bathing or swimming) for at least two weeks or until it is healed. If you work out (esp. cardiovascular or aerobic) take some time off. Profuse sweating has the same effect on new tattoos as soaking in water. Wear loose clothing that will allow your healing tattoo to breathe. Do not pick at or scratch your new tattoo. This will cause damage to the design. If it itches, apply more lotion or cream. The average healing time is 7-14 days.
                        </p>
                        <p>
                            Also, you might have a lot of friends that will tell you exactly how to take care of your new tattoo. Do not listen to them - we are the professionals here! If something goes wrong during the healing, you will have to pay for the touchup if you didn't follow our instructions, and trust us, we can tell!
                        </p>
                    </div>

                    <div className="aftercare-contact">
                        <p>
                            If you have any questions or concerns please contact us at <a href="mailto:mackstattoos@gmail.com">mackstattoos@gmail.com</a> or call us at <a href="tel:435-555-5785">(435) 327-2165</a>. Thank you!
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TattooAftercare;