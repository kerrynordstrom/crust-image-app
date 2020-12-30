import React from "react";
import "./styles/carousel.scss";
import ImageGallery from 'react-image-gallery';

const CarouselBike = ({ photos }) => {
  return (
    <div>
      {photos.length > 0 && <ImageGallery items={photos}/>}
    </div>
  );
};

export default CarouselBike;
