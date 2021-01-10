import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';

import SinglePhotoUploadPreview from "./uploadPreview/SinglePhotoUploadPreview";

const useStyles = makeStyles({
  root: {
    gap: 20,
  },
});

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
      <ImageList
        cols={3}
        className={classes.root}
      >
    {files.map((file, index) => {
      return (
        <SinglePhotoUploadPreview
          file={file}
          key={file.preview}
          index={index}
          onImageUpdate={onImageUpdate}
          onImageRemove={onImageRemove}
        />
      );
      })}
      </ImageList>
    );
};
export default UploadPreview;