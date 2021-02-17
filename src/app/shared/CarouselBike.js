import React from "react";
import "../../styles/carousel.scss";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import Grid from "@material-ui/core/Grid";

import StyledButton from './StyledButton';
import BuildList from './carouselBike/BuildList';
import BikeCard from './carouselBike/BikeCard'

// Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: 1000
  }
};

const CarouselBike = ({showBike, bikeDetails, photos, setActive, bikeID, bikeModel}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [buildListShowing, setShowBuildList] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setShowBuildList(false);
    setIsOpen(false);
    setActive(0);
  }

  const showBuildList = () => {
    setShowBuildList(!buildListShowing ? true : false);
  }

  const resolveCardPhoto = (photos) => {
    return (photos.length > 0 && photos[0].thumbnail
          ? photos[0].thumbnail
          : "https://via.placeholder.com/400x200.png?text=Placeholder"
    )
  }

  return bikeID === showBike ? (
    <div>
      {photos.length > 0 && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          parentSelector={() => document.querySelector("#root")}
          contentLabel="Gallery Modal"
        >
        <div 
          style={{
            display: "flex",
            position: "absolute",
            width: "160px",
            zIndex: 1000,
            top: "20px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <StyledButton
            onClick={closeModal}
            content="Close"
          />
          <StyledButton
            onClick={showBuildList}
            content="Build List"
          />
        </div>
          {buildListShowing && <BuildList bikeDetails={bikeDetails} />}
          <ImageGallery items={photos} />
        </Modal>
      )}
    </div>
  ) : (
    <BikeCard
      photo={resolveCardPhoto(photos)}
      bikeID={bikeID}
      bikeDetails={bikeDetails}
      setActive={setActive}
      openModal={openModal}
      shouldOpen={photos.length > 0}
    />
    );
  };
  
  export default CarouselBike;
