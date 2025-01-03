import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="main">
            <div className="contact-container">
                <div className="map-container">
                    <iframe
                        title="Map to Mack's Tattoo"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.6940069783864!2d-113.06585838796467!3d37.67989727189272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b561badef2c4cd%3A0x3fe11f0413ec0cbd!2sMack&#39;s%20Tattoo%20Shop!5e0!3m2!1sen!2sus!4v1735865321349!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="shop-details">
                    <h2>Mack's Tattoo & Piercing</h2>
                    <p>146 N 100 W<br />Cedar City, UT 84720</p>
                    <p>(435) 327-2165</p>
                    <p>Email: <a href="mailto:info@macks-tattoos.com">mackstattoos@gmail.com</a></p>
                    <h3>Business Hours</h3>
                    <p>12 PM - 8 PM, 7 Days a Week</p>
                </div>

                {/* Map Section */}
                {/* <div className="map-container">
                <iframe
                    title="Map to Mack's Tattoo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.412051406021!2d-122.41941568468154!3d37.77492927975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d394a98b7%3A0x4095f474c2027fd1!2sMission%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1636599634320!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div> */}

                <div className="contact-form-container">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
