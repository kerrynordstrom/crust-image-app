import React from 'react';
import ImageListItem from "@material-ui/core/ImageListItem";
import { makeStyles } from "@material-ui/core/styles";

import { maxNumberOfImages } from "../../../../helpers/uploadErrors";

import ReplaceRemoveButtons from './singlePhotoUploadPreview/ReplaceRemoveButtons'


const imageContainerHeight = 800;
const imageContainerWidth = 1000;

const useStyles = makeStyles({
  img: {
    height: imageContainerHeight / maxNumberOfImages * 3,
    width: imageContainerWidth / maxNumberOfImages * 3,
  },
});

const SinglePhotoUploadPreview = ({file, onImageUpdate, onImageRemove, index}) => {
  const classes = useStyles();
  return (
    <ImageListItem className={classes.img} key={file.preview}>
      <img src={file.preview} alt="" />
      <ReplaceRemoveButtons
        index={index}
        onImageUpdate={onImageUpdate}
        onImageRemove={onImageRemove}
      />
    </ImageListItem>
  );
}

export default SinglePhotoUploadPreview;