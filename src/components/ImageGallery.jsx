import React, { useState } from 'react';

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
import MackTat19 from '../pages/imgs/mack/mack_tat19.JPG'
import MackTat20 from '../pages/imgs/mack/mack_tat20.JPG'

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
import PreciousTat19 from '../pages/imgs/precious/precious_tattoo30.jpg'

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
import StarrTat19 from '../pages/imgs/starr/starr_tat19.jpg'
import StarrTat20 from '../pages/imgs/starr/starr_tat22.jpg'

/* JUSTICE PICS */
import JusticeTat1 from '../pages/imgs/justice/justice_tat1.JPG'
import JusticeTat2 from '../pages/imgs/justice/justice_tat2.JPG'
import JusticeTat3 from '../pages/imgs/justice/justice_tat3.JPG'
import JusticeTat4 from '../pages/imgs/justice/justice_tat4.JPG'
import JusticeTat5 from '../pages/imgs/justice/justice_tat5.JPG'
import JusticeTat6 from '../pages/imgs/justice/justice_tat6.JPG'
import JusticeTat7 from '../pages/imgs/justice/justice_tat7.JPG'
import JusticeTat8 from '../pages/imgs/justice/justice_tat8.JPG'
import JusticeTat9 from '../pages/imgs/justice/justice_tat9.png'
import JusticeTat10 from '../pages/imgs/justice/justice_tat10.JPG'
import JusticeTat11 from '../pages/imgs/justice/justice_tat11.jpg'
import JusticeTat12 from '../pages/imgs/justice/justice_tat12.jpg'
import JusticeTat13 from '../pages/imgs/justice/justice_tat13.jpg'
import JusticeTat14 from '../pages/imgs/justice/justice_tat14.jpg'
import JusticeTat15 from '../pages/imgs/justice/justice_tat18.jpg'
import JusticeTat16 from '../pages/imgs/justice/justice_tat16.jpg'
import JusticeTat17 from '../pages/imgs/justice/justice_tat17.JPG'

/* PIERCING PICS */
import Piercing1 from '../pages/imgs/piercings/piercing1.jpg'
import Piercing2 from '../pages/imgs/piercings/piercing2.jpg'
import Piercing3 from '../pages/imgs/piercings/piercing3.jpg'
import Piercing4 from '../pages/imgs/piercings/piercing5.png'
import Piercing5 from '../pages/imgs/piercings/piercing6.jpg'
import Piercing6 from '../pages/imgs/piercings/piercing7.jpg'
import Piercing7 from '../pages/imgs/piercings/piercing8.jpg'
import Piercing8 from '../pages/imgs/piercings/piercing9.jpg'
import Piercing9 from '../pages/imgs/piercings/piercing10.jpg'


const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        MackTat1,
        MackTat2,
        MackTat3,
        PreciousTat13,
        MackTat4,
        StarrTat20,
        MackTat5,
        MackTat6,
        PreciousTat1,
        PreciousTat2,
        PreciousTat3,
        PreciousTat4,
        PreciousTat5,
        StarrTat1,
        StarrTat2,
        StarrTat3,
        StarrTat4,
        StarrTat5,
        Piercing1,
        Piercing2,
        Piercing3,
        Piercing4,
        Piercing5,
        Piercing6,
        Piercing7,
        Piercing8,
        Piercing9,
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
        PreciousTat6,
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
        PreciousTat14,
        PreciousTat15,
        PreciousTat16,
        PreciousTat17,
        PreciousTat18,
        StarrTat13,
        StarrTat14,
        StarrTat15,
        StarrTat16,
        StarrTat6,
        StarrTat17,
        StarrTat18,
        MackTat19,
        MackTat20,
        PreciousTat19,
        StarrTat19,
        JusticeTat1,
        JusticeTat2,
        JusticeTat3,
        JusticeTat4,
        JusticeTat5,
        JusticeTat6,
        JusticeTat7,
        JusticeTat8,
        JusticeTat9,
        JusticeTat10,
        JusticeTat11,
        JusticeTat12,
        JusticeTat13,
        JusticeTat14,
        JusticeTat15,
        JusticeTat16,
        JusticeTat17
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
