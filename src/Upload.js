import React from "react";
import ImageUploading from "react-images-uploading";

import BikeForm from "./BikeForm"

import { postImages } from "./api/post";

import "./styles/upload.scss"

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

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
  width: 100,
  height: 100,
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

const Upload = () => {
  const [images, setImages] = React.useState([]);
  const [approved, setApproved] = React.useState(false);
  // const [uploading, setUploading] = React.useState(false);
  const maxNumber = 10;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onSubmit = () => {
    // setUploading(true);
    if (!approved) return;
    console.log('approved?', approved)
    const formData = new FormData();

    images.forEach(({file}, i) => {
      formData.append(i, file);
    });

    if (approved) {
      postImages(formData)
        .then((images) => {
          // setUploading(false);
          setImages(images);
      });
    }
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <BikeForm setApproved={setApproved} />
            <div
              style={{...baseStyle}}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </div>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            <button onClick={onSubmit}>Submit</button>

            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
            
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Upload;
