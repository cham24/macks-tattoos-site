import React from 'react';
import './AftercarePages.css';

function PiercingAftercare() {
    return (
        <div className="main">
            <div className="piercing-aftercare-container">
                <div className="tattoo-aftercare-header">
                    <h1>PIERCING AFTERCARE</h1>
                </div>

                <p>
                    Caring for your new piercing is essential to ensure proper healing and avoid complications.
                    Follow these guidelines to keep your piercing healthy.
                </p>

                <div className="piercing-aftercare-content">
                    <h2>General Piercing Aftercare Instructions</h2>
                    <ul>
                        <li>Always wash your hands thoroughly before touching your piercing or jewelry.</li>
                        <li>Clean your piercing twice daily with a saline solution or a piercing aftercare spray.</li>
                        <li>
                            Avoid using alcohol, hydrogen peroxide, or ointments as they can irritate the piercing.
                        </li>
                        <li>Do not remove or twist your jewelry during the healing process.</li>
                        <li>Avoid swimming in pools, hot tubs, or natural bodies of water during healing.</li>
                        <li>
                            Be cautious of clothing, hair, or objects that might catch or irritate your piercing.
                        </li>
                    </ul>

                    <h2>Healing Times for Common Piercings</h2>
                    <table className="piercing-healing-times-table">
                        <thead>
                            <tr>
                                <th>Piercing Type</th>
                                <th>Healing Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Earlobe</td>
                                <td>4-6 weeks</td>
                            </tr>
                            <tr>
                                <td>Cartilage</td>
                                <td>4-6 weeks</td>
                            </tr>
                            <tr>
                                <td>Navel</td>
                                <td>4-6 weeks</td>
                            </tr>
                            <tr>
                                <td>Nostril</td>
                                <td>4-6 weeks</td>
                            </tr>
                            <tr>
                                <td>Tongue</td>
                                <td>6-10 weeks</td>
                            </tr>
                            <tr>
                                <td>Lips</td>
                                <td>6-10 weeks</td>
                            </tr>
                            <tr>
                                <td>Dermals</td>
                                <td>6-10 weeks</td>
                            </tr>
                            <tr>
                                <td>Nipple</td>
                                <td>12 months</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>*If piercings get snagged, healing may take longer.</p>

                    <h2>Signs of Infection</h2>
                    <p>
                        If you experience prolonged redness, swelling, pain, or discharge, contact your piercer or a healthcare professional immediately. Avoid removing the jewelry, as this can trap the infection.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        For any questions or concerns, feel free to <a href="mailto:mackstattos@gmail.com">email us</a> or call us at (435) 327-2165.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PiercingAftercare;
