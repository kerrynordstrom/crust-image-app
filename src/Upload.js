import React from "react";
import ImageUploading from "react-images-uploading";

const Upload = () => {
  const [images, setImages] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);
  const maxNumber = 10;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onSubmit = () => {
    setUploading(true);

    const formData = new FormData();

    images.forEach(({file}, i) => {
      formData.append(i, file);
      formData.append('public_id', `foo_bike_${i}`)
    });

    fetch(`http://localhost:8080/image-upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((images) => {
        setUploading(false);
        setImages(images);
      });
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
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
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
