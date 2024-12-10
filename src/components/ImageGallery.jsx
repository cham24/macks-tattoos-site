import React from 'react';
import RefImg from './imgs/img_ref.png'

const ImageGallery = () => {
    const images = [
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg,
        RefImg
    ];

    return (
        <div className="image-gallery">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
            ))}
        </div>
    );
};

export default ImageGallery;
