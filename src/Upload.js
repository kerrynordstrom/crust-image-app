import React from "react";
import { v1 as uuidv1 } from "uuid";
import ImageUploading from "react-images-uploading";
import { useDropzone } from "react-dropzone";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import UploadPreview from "./UploadPreview"
import Spinner from "./Spinner";
import StyledButton from "./StyledButton";

import { postImages } from "./api/post";
import {
  uploadErrorMapper,
  maxNumberOfImages,
  maxFileSize,
  resolutionType,
  resolutionWidth,
  resolutionHeight
} from "./helpers/uploadErrors";
import { bikeModels } from './bikeForm/BikeModelSelect'

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

const Upload = ({ bikeDetails, previousStep, nextStep }) => {
  const [images, setImages] = React.useState([]);
  const [approved, setApproved] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const getBikeModelDisplayName = (bikeDetails) => {
    const { "Bike Model": bikeModel } = bikeDetails
  const filteredBike = bikeModels.filter((bike) => bike.value === bikeModel)[0];

  if (filteredBike) {
    return filteredBike.displayName;
  } else return "Awesome Crust Bike";
}

  const embellishedBikeDetails = {
    "Model": getBikeModelDisplayName(bikeDetails),
    ...bikeDetails,
  };
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
      imageList.map((image) => {
        return Object.assign(
          { ...image },
          {
            preview: URL.createObjectURL(image.file),
          }
        );
      })
    );
  };

  const onSubmit = () => {
    if (!approved) {
      alert("Please mark your bike submission for approval!");
      return;
    }

    if (approved) {
      setUploading(true);
      const bikeID = uuidv1();

      const formData = new FormData();

      images.forEach(({ file }, i) => {
        formData.append(i, file);
      });
      formData.append('bikeID', bikeID);
      formData.append("bikeDetails", JSON.stringify(embellishedBikeDetails));

      console.log('formData', {bikeID: formData.get('bikeID'), bikeDetails: formData.get('bikeDetails')})
      
      postImages(formData).then((results) => {
        console.log('results', {results})
        setUploading(false);
        setFinished(true);
        // setImages(images);
      }).catch(error => console.log(error));
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
          <div className="upload__image-wrapper" style={wrapperStyle}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="submitBike"
                  value="yes"
                  onChange={(event) =>
                    event.target.checked
                      ? setApproved(true)
                      : setApproved(false)
                  }
                />
              }
              label="Ready to submit bike for approval?"
            />
            {(!uploading || finished) && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <StyledButton
                  content="Remove All Images"
                  onClick={onImageRemoveAll}
                />
                <StyledButton content="Submit Photos" onClick={onSubmit} />
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        className="progress-page-upload__btn-wrapper"
      >
        <StyledButton content="Previous Step" onClick={previousStep} />
        <StyledButton
          content="Next Step"
          onClick={nextStep}
          disabled={!finished}
        />
      </div>
    </div>
  );
};

export default Upload;