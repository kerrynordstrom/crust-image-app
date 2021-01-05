import React from "react";
import ImageUploading from "react-images-uploading";

import BikeForm from "./BikeForm"
import UploadPreview from "./UploadPreview"
import Spinner from "./Spinner";

import { postImages } from "./api/post";
import {
  uploadErrorMapper,
  maxNumberOfImages,
  maxFileSize,
  resolutionType,
  resolutionWidth,
  resolutionHeight
} from "./helpers/uploadErrors";

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

const Upload = () => {
  const [images, setImages] = React.useState([]);
  const [approved, setApproved] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  
  const onError = (errors, _files) => {
    alert(uploadErrorMapper(errors));
  };

  const onChange = (imageList, _addUpdateIndex) => {
    setImages(
      imageList.map((image) =>{
        return Object.assign({...image}, {
          preview: URL.createObjectURL(image.file),
        });
      })
    );
  };
  const onSubmit = () => {
    if (!approved) {
      alert('Please mark your bike submission for approval!');
      return;
    };

    setUploading(true);
    const formData = new FormData();

    images.forEach(({file}, i) => {
      formData.append(i, file);
    });

    if (approved) {
      postImages(formData)
        .then((images) => {
          setUploading(false);
          setFinished(true);
          setImages(images);
      });
    }
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        acceptType={["jpg", "gif", "png"]}
        value={images}
        onChange={onChange}
        onError={onError}
        maxNumber={maxNumberOfImages}
        maxFileSize={maxFileSize}
        resolutionType={resolutionType}
        resolutionWidth={resolutionWidth}
        resolutionHeight={resolutionHeight}
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
              style={{ ...baseStyle }}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </div>
            {<Spinner loading={true} />}
            {(!uploading || finished) && (
              <div>
                <UploadPreview
                  files={images}
                  onImageUpdate={onImageUpdate}
                  onImageRemove={onImageRemove}
                />
                <button onClick={onImageRemoveAll}>Remove all images</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Upload;
