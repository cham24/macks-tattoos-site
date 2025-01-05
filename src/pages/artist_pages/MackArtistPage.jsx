import React, { useState } from 'react';
import './ArtistsPage.css';
import ArtistImg from '../imgs/mack.png';
import TattooImg1 from '../imgs/mack/mack_tat10.jpg';
import TattooImg2 from '../imgs/mack/mack_tat2.jpg';
import TattooImg3 from '../imgs/mack/mack_tat3.jpg';
import TattooImg4 from '../imgs/mack/mack_tat5.jpg';
import TattooImg5 from '../imgs/mack/mack_tat6.jpg';
import TattooImg6 from '../imgs/mack/mack_tat8.jpg';
import TattooImg7 from '../imgs/mack/mack_tat1.JPG';
import TattooImg8 from '../imgs/mack/mack_tat4.JPG';
import TattooImg9 from '../imgs/mack/mack_tat7.JPG';
import TattooImg10 from '../imgs/mack/mack_tat9.JPG';
import TattooImg11 from '../imgs/mack/mack_tat11.JPG';
import TattooImg12 from '../imgs/mack/mack_tat12.JPG';
import TattooImg13 from '../imgs/mack/mack_tat13.JPG';
import TattooImg14 from '../imgs/mack/mack_tat14.JPG';
import TattooImg15 from '../imgs/mack/mack_tat15.JPG';
import TattooImg16 from '../imgs/mack/mack_tat16.JPG';
import TattooImg17 from '../imgs/mack/mack_tat17.JPG';
import TattooImg18 from '../imgs/mack/mack_tat18.JPG';
import TattooImg19 from '../imgs/mack/mack_tat19.JPG';
import TattooImg20 from '../imgs/mack/mack_tat20.JPG';
import TattooImg21 from '../imgs/mack/mack_tat21.JPG';
import TattooImg22 from '../imgs/mack/mack_tat22.JPG';

const SampleArtistPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    TattooImg1,
    TattooImg2,
    TattooImg3,
    TattooImg4,
    TattooImg5,
    TattooImg6,
    TattooImg7,
    TattooImg8,
    TattooImg9,
    TattooImg10,
    TattooImg11,
    TattooImg12,
    TattooImg13,
    TattooImg14,
    TattooImg15,
    TattooImg16,
    TattooImg17,
    TattooImg18,
    TattooImg19,
    TattooImg20,
    TattooImg21,
    TattooImg22,
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main">
      <div className="artist-page">
        <header className="artist-header">
          <p className="availability">Available Days: By Appt. Only</p>
        </header>

        <section className="artist-bio">
          <div className="bio-text">
            <h3>TATTOO ARTIST | Mack</h3>
            <p>Mack, a seasoned tattoo artist from Las Vegas, began his tattooing journey in 2005, completing an intensive apprenticeship in his hometown while traveling from Cedar City every weekend. In June 2012, he opened Mack's Tattoos, where he continues to blend skill and passion in every piece he creates. With nearly two decades of experience, Mack's artistry reflects a deep dedication to the craft.</p>
          </div>
          <div className="bio-photo">
            <img src={ArtistImg} alt="MACK" />
          </div>
        </section>

        <section className="artist-portfolio">
          <h2>PORTFOLIO</h2>
          <div className="artist-portfolio-grid">
            {images.map((image, index) => (
              <img
                className="artist-tattoo-image"
                key={index}
                src={image}
                alt={`Tattoo ${index + 1}`}
                onClick={() => openModal(image)}
              />
            ))}
          </div>
        </section>
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected Tattoo" />
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleArtistPage;
