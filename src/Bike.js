import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from './Image';

const createCarouselItemImage = (photo, bikeModel, i, options = {}) => (
  <div key={i}>
    <Image
      key={photo.public_id}
      publicId={photo.public_id}
      transformation={{ width: "300", crop: "scale" }}
    />
    <p className="legend">{bikeModel}</p>
  </div>
);

const Bike = ({
  photos,
  bikeModel,
}) => {
  return (
    <Carousel dynamicHeight={true}  showThumbs={true}>
      {photos.length > 0 &&
        photos.map((photo, i) => {
          return (
            <div>
              {createCarouselItemImage(photo, bikeModel, i)}
            </div>
          );
        })}
    </Carousel>
  );
}

export default Bike;