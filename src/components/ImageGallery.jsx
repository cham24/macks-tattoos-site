import React, { useState } from 'react';
// import RefImg from './imgs/img_ref.png'

/* MACK PICS */
import MackTat1 from '../pages/imgs/mack/mack_tat2.jpg'
import MackTat2 from '../pages/imgs/mack/mack_tat3.jpg'
import MackTat3 from '../pages/imgs/mack/mack_tat5.jpg'
import MackTat4 from '../pages/imgs/mack/mack_tat6.jpg'
import MackTat5 from '../pages/imgs/mack/mack_tat8.jpg'
import MackTat6 from '../pages/imgs/mack/mack_tat10.jpg'
import MackTat7 from '../pages/imgs/mack/mack_tat1.JPG'
import MackTat8 from '../pages/imgs/mack/mack_tat4.JPG'
import MackTat9 from '../pages/imgs/mack/mack_tat7.JPG'
import MackTat10 from '../pages/imgs/mack/mack_tat9.JPG'
import MackTat11 from '../pages/imgs/mack/mack_tat11.JPG'
import MackTat12 from '../pages/imgs/mack/mack_tat12.JPG'
import MackTat13 from '../pages/imgs/mack/mack_tat13.JPG'
import MackTat14 from '../pages/imgs/mack/mack_tat14.JPG'
import MackTat15 from '../pages/imgs/mack/mack_tat15.JPG'
import MackTat16 from '../pages/imgs/mack/mack_tat16.JPG'
import MackTat17 from '../pages/imgs/mack/mack_tat17.JPG'
import MackTat18 from '../pages/imgs/mack/mack_tat18.JPG'

/* PRECIOUS PICS */
import PreciousTat1 from '../pages/imgs/precious/precious_tattoo1.png'
import PreciousTat2 from '../pages/imgs/precious/precious_tattoo2.png'
import PreciousTat3 from '../pages/imgs/precious/precious_tattoo3.png'
import PreciousTat4 from '../pages/imgs/precious/precious_tattoo4.png'
import PreciousTat5 from '../pages/imgs/precious/precious_tattoo7.jpeg'
import PreciousTat6 from '../pages/imgs/precious/precious_tattoo10.jpg'
import PreciousTat7 from '../pages/imgs/precious/precious_tattoo11.jpg'
import PreciousTat8 from '../pages/imgs/precious/precious_tattoo12.jpg'
import PreciousTat9 from '../pages/imgs/precious/precious_tattoo13.jpg'
import PreciousTat10 from '../pages/imgs/precious/precious_tattoo14.jpg'
import PreciousTat11 from '../pages/imgs/precious/precious_tattoo15.jpg'
import PreciousTat12 from '../pages/imgs/precious/precious_tattoo16.jpg'
import PreciousTat13 from '../pages/imgs/precious/precious_tattoo52.jpg'
import PreciousTat14 from '../pages/imgs/precious/precious_tattoo18.jpg'
import PreciousTat15 from '../pages/imgs/precious/precious_tattoo19.jpg'
import PreciousTat16 from '../pages/imgs/precious/precious_tattoo51.jpg'
import PreciousTat17 from '../pages/imgs/precious/precious_tattoo21.jpg'
import PreciousTat18 from '../pages/imgs/precious/precious_tattoo22.jpg'

/* STARR PICS */
import StarrTat1 from '../pages/imgs/starr/starr_tat1.JPG'
import StarrTat2 from '../pages/imgs/starr/starr_tat2.JPG'
import StarrTat3 from '../pages/imgs/starr/starr_tat3.JPG'
import StarrTat4 from '../pages/imgs/starr/starr_tat4.JPG'
import StarrTat5 from '../pages/imgs/starr/starr_tat5.jpg'
import StarrTat6 from '../pages/imgs/starr/starr_tat6.jpg'
import StarrTat7 from '../pages/imgs/starr/starr_tat7.jpg'
import StarrTat8 from '../pages/imgs/starr/starr_tat8.jpg'
import StarrTat9 from '../pages/imgs/starr/starr_tat9.jpg'
import StarrTat10 from '../pages/imgs/starr/starr_tat10.jpg'
import StarrTat11 from '../pages/imgs/starr/starr_tat11.jpg'
import StarrTat12 from '../pages/imgs/starr/starr_tat12.jpg'
import StarrTat13 from '../pages/imgs/starr/starr_tat13.jpg'
import StarrTat14 from '../pages/imgs/starr/starr_tat14.jpg'
import StarrTat15 from '../pages/imgs/starr/starr_tat15.jpg'
import StarrTat16 from '../pages/imgs/starr/starr_tat16.jpg'
import StarrTat17 from '../pages/imgs/starr/starr_tat17.jpg'
import StarrTat18 from '../pages/imgs/starr/starr_tat18.jpg'

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        MackTat1,
        MackTat2,
        MackTat3,
        MackTat4,
        MackTat5,
        MackTat6,
        PreciousTat1,
        PreciousTat2,
        PreciousTat3,
        PreciousTat4,
        PreciousTat5,
        PreciousTat6,
        StarrTat1,
        StarrTat2,
        StarrTat3,
        StarrTat4,
        StarrTat5,
        StarrTat6,
        MackTat7,
        MackTat8,
        MackTat9,
        MackTat10,
        MackTat11,
        MackTat12,
        PreciousTat7,
        PreciousTat8,
        PreciousTat9,
        PreciousTat10,
        PreciousTat11,
        PreciousTat12,
        StarrTat7,
        StarrTat8,
        StarrTat9,
        StarrTat10,
        StarrTat11,
        StarrTat12,
        MackTat13,
        MackTat14,
        MackTat15,
        MackTat16,
        MackTat17,
        MackTat18,
        PreciousTat13,
        PreciousTat14,
        PreciousTat15,
        PreciousTat16,
        PreciousTat17,
        PreciousTat18,
        StarrTat13,
        StarrTat14,
        StarrTat15,
        StarrTat16,
        StarrTat17,
        StarrTat18
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="image-gallery">
            {images.map((src, index) => (
                <img
                    className="image-gallery-img"
                    key={index}
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    onClick={() => openModal(src)}
                />
            ))}

            {selectedImage && (
                <div className="home-modal" onClick={closeModal}>
                    <div className="home-modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Full Size" />
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
