import React, { useState } from 'react';
import './ArtistsPage.css';
import ArtistImg from '../imgs/artist_image.png';
import TattooImg1 from '../imgs/matt/matt_tat1.JPG';
import TattooImg2 from '../imgs/matt/matt_tat2.JPG';
import TattooImg3 from '../imgs/tattoo_img.png';
import TattooImg4 from '../imgs/tattoo_img.png';
import TattooImg5 from '../imgs/tattoo_img.png';
import TattooImg6 from '../imgs/tattoo_img.png';

const SampleArtistPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    TattooImg1,
    TattooImg2,
    // TattooImg3,
    // TattooImg4,
    // TattooImg5,
    // TattooImg6
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
          <p className="availability">Available Days: Tue. - Sat.</p>
        </header>

        <section className="artist-bio">
          <div className="bio-text">
            <h3>TATTOO ARTIST | Matt</h3>
            <p>Matt, a Las Vegas native, launched his tattooing journey in June 2024 through an apprenticeship at Mack's Tattoos. With a focus on creativity and precision, he is committed to becoming a better artist by crafting unique and memorable designs.</p>
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
