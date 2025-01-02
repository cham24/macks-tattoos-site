import React, { useState } from 'react';
import './ArtistsPage.css';
import ArtistImg from '../imgs/mack.png';
import TattooImg1 from '../imgs/mack/mack_tat10.jpg';
import TattooImg2 from '../imgs/mack/mack_tat2.jpg';
import TattooImg3 from '../imgs/mack/mack_tat3.jpg';
import TattooImg4 from '../imgs/mack/mack_tat5.jpg';
import TattooImg5 from '../imgs/mack/mack_tat6.jpg';
import TattooImg6 from '../imgs/mack/mack_tat8.jpg';
const SampleArtistPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    TattooImg1,
    TattooImg2,
    TattooImg3,
    TattooImg4,
    TattooImg5,
    TattooImg6
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
            <h3>TATTOO ARTIST | Mack</h3>
            <p>***INSERT ARTIST BIO HERE***</p>
            <p>***INSERT XTRA INFO HERE***</p>
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
