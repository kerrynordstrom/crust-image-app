import React from "react";
import "./styles/carousel.scss";
import ImageGallery from 'react-image-gallery';

const CarouselBike = ({showBike, photos, setActive, bikeID}) => {
  return (showBike && bikeID === showBike) ? (
    <div>
      {photos.length > 0 && <ImageGallery items={photos}/>}
    </div>
  ) : <img onClick={() => {
    setActive(bikeID)
  }} alt="placeholder" src={photos.length > 0 && photos[0].thumbnail ? photos[0].thumbnail : "https://via.placeholder.com/400x200.png?text=Placeholder"}></img>;
};

export default CarouselBike;
