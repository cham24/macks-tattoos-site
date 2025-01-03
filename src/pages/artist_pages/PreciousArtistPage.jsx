import React, { useState } from 'react';
import './ArtistsPage.css';
import ArtistImg from '../imgs/precious.png';
import TattooImg1 from '../imgs/precious/precious_tattoo1.png';
import TattooImg2 from '../imgs/precious/precious_tattoo52.jpg';
import TattooImg3 from '../imgs/precious/precious_tattoo3.png';
import TattooImg4 from '../imgs/precious/precious_tattoo5.JPG';
import TattooImg5 from '../imgs/precious/precious_tattoo4.png';
import TattooImg6 from '../imgs/precious/precious_tattoo6.JPG';
import TattooImg7 from '../imgs/precious/precious_tattoo7.jpeg';
import TattooImg8 from '../imgs/precious/precious_tattoo51.jpg';
import TattooImg9 from '../imgs/precious/precious_tattoo57.jpg';
import TattooImg10 from '../imgs/precious/precious_tattoo50.jpg';
import TattooImg11 from '../imgs/precious/precious_tattoo48.jpg';
import TattooImg12 from '../imgs/precious/precious_tattoo41.jpg';
import TattooImg13 from '../imgs/precious/precious_tattoo54.jpg';
import TattooImg14 from '../imgs/precious/precious_tattoo39.jpg';
import TattooImg15 from '../imgs/precious/precious_tattoo35.jpg';
import TattooImg16 from '../imgs/precious/precious_tattoo34.jpg';
import TattooImg17 from '../imgs/precious/precious_tattoo16.jpg';
import TattooImg18 from '../imgs/precious/precious_tattoo25.jpg';
import TattooImg19 from '../imgs/precious/precious_tattoo10.jpg';
import TattooImg20 from '../imgs/precious/precious_tattoo18.jpg';
import TattooImg21 from '../imgs/precious/precious_tattoo12.jpg';
import TattooImg22 from '../imgs/precious/precious_tattoo11.jpg';
import TattooImg23 from '../imgs/precious/precious_tattoo9.jpg';
import TattooImg24 from '../imgs/precious/precious_tattoo8.jpg';
import TattooImg25 from '../imgs/precious/precious_tattoo13.jpg';
import TattooImg26 from '../imgs/precious/precious_tattoo40.jpg';
import TattooImg27 from '../imgs/precious/precious_tattoo42.jpg';
import TattooImg28 from '../imgs/precious/precious_tattoo61.jpg';
import TattooImg29 from '../imgs/precious/precious_tattoo47.jpg';
import TattooImg30 from '../imgs/precious/precious_tattoo49.jpg';
import TattooImg31 from '../imgs/precious/precious_tattoo43.jpg';
import TattooImg32 from '../imgs/precious/precious_tattoo45.jpg';
import TattooImg33 from '../imgs/precious/precious_tattoo17.jpg';
import TattooImg34 from '../imgs/precious/precious_tattoo19.jpg';
import TattooImg35 from '../imgs/precious/precious_tattoo20.jpg';
import TattooImg36 from '../imgs/precious/precious_tattoo56.jpg';
import TattooImg37 from '../imgs/precious/precious_tattoo21.jpg';
import TattooImg38 from '../imgs/precious/precious_tattoo26.jpg';
import TattooImg39 from '../imgs/precious/precious_tattoo15.jpg';
import TattooImg40 from '../imgs/precious/precious_tattoo27.jpg';
import TattooImg41 from '../imgs/precious/precious_tattoo29.jpg';
import TattooImg42 from '../imgs/precious/precious_tattoo31.jpg';

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
    TattooImg36,
    TattooImg37,
    TattooImg38,
    TattooImg39,
    TattooImg40,
    TattooImg41,
    TattooImg42
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
            <h3>TATTOO ARTIST | Precious</h3>
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
