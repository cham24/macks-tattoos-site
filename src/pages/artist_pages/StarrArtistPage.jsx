import React, { useState } from 'react';
import './ArtistsPage.css';
import ArtistImg from '../imgs/starr.png';
import TattooImg1 from '../imgs/starr/starr_tat1.JPG';
import TattooImg2 from '../imgs/starr/starr_tat2.JPG';
import TattooImg3 from '../imgs/starr/starr_tat3.JPG';
import TattooImg4 from '../imgs/starr/starr_tat4.JPG';
import TattooImg5 from '../imgs/starr/starr_tat5.jpg';
import TattooImg6 from '../imgs/starr/starr_tat6.jpg';
import TattooImg7 from '../imgs/starr/starr_tat7.jpg';
import TattooImg8 from '../imgs/starr/starr_tat8.jpg';
import TattooImg9 from '../imgs/starr/starr_tat9.jpg';
import TattooImg10 from '../imgs/starr/starr_tat10.jpg';
import TattooImg11 from '../imgs/starr/starr_tat11.jpg';
import TattooImg12 from '../imgs/starr/starr_tat12.jpg';
import TattooImg13 from '../imgs/starr/starr_tat13.jpg';
import TattooImg14 from '../imgs/starr/starr_tat14.jpg';
import TattooImg15 from '../imgs/starr/starr_tat15.jpg';
import TattooImg16 from '../imgs/starr/starr_tat16.jpg';
import TattooImg17 from '../imgs/starr/starr_tat17.jpg';
import TattooImg18 from '../imgs/starr/starr_tat18.jpg';
import TattooImg19 from '../imgs/starr/starr_tat19.jpg';
import TattooImg20 from '../imgs/starr/starr_tat20.jpg';
import TattooImg21 from '../imgs/starr/starr_tat21.png';

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
    TattooImg21
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
          <p className="availability">Available Days: *** - ***</p>
        </header>

        <section className="artist-bio">
          <div className="bio-text">
            <h3>TATTOO ARTIST | Starr </h3>
            <p>***INSERT ARTIST BIO HERE***</p>
            <p>***INSERT XTRA INFO HERE***</p>
          </div>
          <div className="bio-photo">
            <img src={ArtistImg} alt="Guilherme Assumpção" />
          </div>
        </section>

        <section className="artist-portfolio">
          <h2>PORTFOLIO</h2>
          <div className="artist-portfolio-grid">
            {images.map((image, index) => (
              <img
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
