import React from "react";
import "./styles/carousel.scss";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';

import StyledButton from './StyledButton';
import BuildList from './BuildList';

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
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const closeModal = () => {
    setIsOpen(false);
    setActive(0);
  }

  const showBuildList = () => {
    setShowBuildList(!buildListShowing ? true : false);
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
          contentLabel="Gallery Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{bikeModel}</h2>
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
          {buildListShowing && ( 
            <BuildList bikeDetails={bikeDetails} />
          )}
          <ImageGallery items={photos} />
        </Modal>
      )}
    </div>
  ) : (
    <img
      onClick={() => {
        if (photos.length === 0) return;
        openModal();
        setActive(bikeID);
      }}
      alt="placeholder"
      src={
        photos.length > 0 && photos[0].thumbnail
          ? photos[0].thumbnail
          : "https://via.placeholder.com/400x200.png?text=Placeholder"
      }
    ></img>
  );
};

export default CarouselBike;
