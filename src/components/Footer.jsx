import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main">
            <footer className="footer">
                <div className="footer-column">
                    {/* <h3>Navigation</h3> */}
                    <ul className="footer-list">
                        <li><a href="/">THE SHOP</a></li>
                        <li><a href="/mack">MACK</a></li>
                        <li><a href="/starr">STARR</a></li>
                        <li><a href="/precious">PRECIOUS</a></li>
                        <li><a href="/justice">JUSTICE</a></li>
                        <li><a href="/matt">MATT</a></li>
                        <li><a href="/aftercare">AFTERCARE</a></li>
                    </ul>
                </div>

                <div className="footer-column business-hours">
                    {/* <h3>Business Hours</h3> */}
                    <p>STORE BUSINESS HOURS FROM 12PM TO 8PM, TUESDAY THROUGH SATURDAY</p><br />
                    <p>PLEASE CLICK ON EACH ARTIST'S PROFILE PAGE FOR HIS OR HER AVAILABILITY</p>
                </div>

                <div className="footer-column">
                    {/* <h3>Contact Us</h3> */}
                    <a href="/" className="right-footer-list">MACK'S TATTOO & PIERCING</a>
                    <p>146 N 100 W<br />CEDAR CITY, UT 84720</p>
                    <a href="tel:+4355555787" className="right-footer-list">(435) 555-5785</a><br /><a href="mailto:mackstattoos@gmail.com" className="right-footer-list">mackstattoos@gmail.com</a>
                    {/* <hr /> */}
                </div>
            </footer>
        </div>
    );
};

export default Footer;
