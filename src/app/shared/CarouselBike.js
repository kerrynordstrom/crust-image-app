import React from "react";
import "../../styles/carousel.scss";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';

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

  console.log({bikeID, bikeDetails, showBike, showModal: bikeID === showBike})

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
          <StyledButton
            style={{ position: "absolute", marginTop: 20, zIndex: 1000 }}
            onClick={closeModal}
            content="Close"
          />
          <StyledButton
            style={{ position: "absolute", marginTop: 60, zIndex: 1000 }}
            onClick={showBuildList}
            content="Build List"
          />
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
