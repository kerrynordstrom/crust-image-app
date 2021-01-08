import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import StyledButton from './StyledButton'

const useStyles = makeStyles({
  root: {
    width: 1000,
    height: 300,
  },
})

const UploadPreview = ({ files, onImageUpdate, onImageRemove }) => {
  const classes = useStyles();
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
    return (
    <ImageList cols={3} rowHeight={50} className={classes.root}>
      {files.map((file, index) => {
        console.log({file})
        return (
          <ImageListItem key={file.preview}>
            <img
              src={file.preview}
              alt=""
            />
            <div key={index} className="image-item">
              <div style={{display: "flex"}} className="image-item__btn-wrapper">
                <StyledButton content="Update" onClick={() => onImageUpdate(index)}/>
                <StyledButton content="Remove" onClick={() => onImageRemove(index)} />
              </div>
            </div>
          </ImageListItem>
        );})}
    </ImageList>
    )
};
export default UploadPreview;