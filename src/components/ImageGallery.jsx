import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ImageGallery = ({ images }) => {
    const hasImages = Array.isArray(images) && images.length > 0;

    const settings = {
        dots: true,
        arrows: hasImages && images.length > 1,
        infinite: hasImages && images.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!hasImages) {
        return <p>No images available for this service.</p>;
    }

    return (
        <Slider {...settings} className="gallery-slick">
            {images.map((src, i) => (
                <div key={i}>
                    <img src={src} alt={`Slide ${i}`} className="gallery-img" />
                </div>
            ))}
        </Slider>
    );
};

export default ImageGallery;