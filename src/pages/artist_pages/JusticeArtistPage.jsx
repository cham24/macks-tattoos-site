import React, { useState } from 'react';
import './ArtistsPage.css';
import ArtistImg from '../imgs/justice.jpg';
import TattooImg1 from '../imgs/justice/justice_tat1.JPG';
import TattooImg2 from '../imgs/justice/justice_tat2.JPG';
import TattooImg3 from '../imgs/justice/justice_tat3.JPG';
import TattooImg4 from '../imgs/justice/justice_tat4.JPG';
import TattooImg5 from '../imgs/justice/justice_tat5.JPG';
import TattooImg6 from '../imgs/justice/justice_tat6.JPG';
import TattooImg7 from '../imgs/justice/justice_tat7.JPG';
import TattooImg8 from '../imgs/justice/justice_tat8.JPG';
import TattooImg9 from '../imgs/justice/justice_tat9.png';
import TattooImg10 from '../imgs/justice/justice_tat10.JPG';
import TattooImg11 from '../imgs/justice/justice_tat11.jpg';
import TattooImg12 from '../imgs/justice/justice_tat12.jpg';
import TattooImg13 from '../imgs/justice/justice_tat13.jpg';
import TattooImg14 from '../imgs/justice/justice_tat14.jpg';
import TattooImg15 from '../imgs/justice/justice_tat15.JPG';
import TattooImg16 from '../imgs/justice/justice_tat16.jpg';
import TattooImg17 from '../imgs/justice/justice_tat17.JPG';
import TattooImg18 from '../imgs/justice/justice_tat18.jpg';
import TattooImg19 from '../imgs/justice/justice_tat19.jpg';
import TattooImg20 from '../imgs/justice/justice_tat20.jpg';
import TattooImg21 from '../imgs/justice/justice_tat21.jpg';
import TattooImg22 from '../imgs/justice/justice_tat22.jpg';
import TattooImg23 from '../imgs/justice/justice_tat23.jpg';
import TattooImg24 from '../imgs/justice/justice_tat24.jpg';
import TattooImg25 from '../imgs/justice/justice_tat25.jpg';
import TattooImg26 from '../imgs/justice/justice_tat26.jpg';
import TattooImg27 from '../imgs/justice/justice_tat27.jpg';
import TattooImg28 from '../imgs/justice/justice_tat28.jpg';
import TattooImg29 from '../imgs/justice/justice_tat29.jpg';
import TattooImg30 from '../imgs/justice/justice_tat30.jpg';
import TattooImg31 from '../imgs/justice/justice_tat31.jpg';
import TattooImg32 from '../imgs/justice/justice_tat32.jpg';
import TattooImg33 from '../imgs/justice/justice_tat33.jpg';
import TattooImg34 from '../imgs/justice/justice_tat34.jpg';
import TattooImg35 from '../imgs/justice/justice_tat35.jpg';
import TattooImg36 from '../imgs/justice/justice_tat36.jpg';

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
    // TattooImg9,
    TattooImg10,
    TattooImg11,
    TattooImg12,
    TattooImg13,
    TattooImg14,
    // TattooImg15,
    TattooImg16,
    TattooImg17,
    TattooImg18,
    TattooImg19,
    TattooImg20,
    TattooImg21,
    TattooImg22,
    TattooImg23,
    TattooImg24,
    TattooImg25,
    TattooImg26,
    TattooImg27,
    TattooImg28,
    TattooImg29,
    TattooImg30,
    TattooImg31,
    TattooImg32,
    TattooImg33,
    TattooImg34,
    TattooImg35,
    TattooImg36
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
            <h3>TATTOO ARTIST | Justice</h3>
            <p>Justice, originally from Las Vegas, started her tattooing and piercing career in July 2024 after beginning her apprenticeship at Mack's at 19. With a fresh perspective and growing expertise, she is dedicated to honing her craft. Justice's passion for art drives her to create bold and personalized designs for every client.</p>
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
