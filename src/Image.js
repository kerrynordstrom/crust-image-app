import React from 'react';
import { cloudName } from './constants/constants'
import {CloudinaryContext, Image as CloudinaryImage, Transformation } from 'cloudinary-react';

const Image = ({
  publicId,
  transformation = {
    width: "300",
    crop: "scale",
  },
}) => {
  const {
    width,
    crop,
  } = transformation;
  return (
    <div>
      <CloudinaryContext cloudName={cloudName}>
        <CloudinaryImage 
        publicId={publicId} 
        dpr="2.0" 
        width={width}
        crop={crop}
        />
      </CloudinaryContext>
    </div>
  );
}

export default Image;