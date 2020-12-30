import React, { Component } from "react";
import Spinner from "./Spinner";
import Images from "./Images";
import Buttons from "./Buttons";
import "./App.css";

export default class App extends Component {
  state = {
    uploading: false,
    images: [],
    formData: null,
  };

  onSubmit = () => {
    const { images } = this.state;
    this.setState({ uploading: true });

    const formData = new FormData();

    images.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`http://localhost:8080/image-upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((images) => {
        this.setState({
          uploading: false,
          images,
        });
      });
  }

  onChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file, i) => {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          files[i].src = reader.result;
        },
        false
      );
      this.setState({ images: files });
      console.log("files w/in onChange", { files });
    });
  };

  removeImage = (id) => {
    this.setState({
      images: this.state.images.filter((image) => image.public_id !== id),
    });
  };

  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return (
            <div>
              <Images images={images} removeImage={this.removeImage} />
              <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
            )
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div>
        <div className="buttons">{content()}</div>
      </div>
    );
  }
}
