import React, { useEffect, useState } from "react";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 300,
  height: 300,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const UploadPreview = ({files, onImageUpdate, onImageRemove}) => {
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="" src={file.preview} style={img} />
      </div>
      <div key={index} className="image-item">
        <div className="image-item__btn-wrapper">
          <button onClick={() => onImageUpdate(index)}>Update</button>
          <button onClick={() => onImageRemove(index)}>Remove</button>
        </div>
        </div>
    </div>
  ));

  return (<aside style={thumbsContainer}>{thumbs}</aside>);
};

export default UploadPreview;