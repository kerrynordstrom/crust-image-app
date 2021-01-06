import React from "react";
import ImageUploading from "react-images-uploading";
import { useDropzone } from "react-dropzone";

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

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const baseDropZoneStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  padding: "100px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const Upload = () => {
  const [images, setImages] = React.useState([]);
  const [approved, setApproved] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const {
    getRootProps,
    // getInputProps,
    // isDragActive,
    // isDragAccept,
    // isDragReject,
  } = useDropzone({
    accept: "image/*",
  });

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
          <div className="upload__image-wrapper" style={wrapperStyle}>
            <BikeForm setApproved={setApproved} />
            {(!uploading || finished) && (
              <div>
                <button onClick={onImageRemoveAll}>Remove all images</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            )}
            <div
              style={getRootProps({ ...baseDropZoneStyle })}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </div>
            {(!uploading || finished) && (
              <div>
                <UploadPreview
                  files={images}
                  onImageUpdate={onImageUpdate}
                  onImageRemove={onImageRemove}
                />
              </div>
            )}
            {uploading && <Spinner loading={true} />}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Upload;
