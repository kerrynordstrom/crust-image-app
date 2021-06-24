import React from "react";
import "../../styles/carousel.scss";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import Grid from "@material-ui/core/Grid";

import CarouselButtons from './carouselBike/CarouselButtons';
import BuildList from './carouselBike/BuildList';
import SimpleBikeCard from './carouselBike/SimpleBikeCard'

import useWindowDimensions from '../../helpers/useWindowDimensions'

// Modal.setAppElement('#root')

const customStyles = ({width, height}) => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: width < 768 ? '50vh' : '100vh'
  },
  overlay: {
    zIndex: 1000
  }
});

const CarouselBike = ({showBike, bikeDetails, userName, photos, setActive, bikeID, bikeModel}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [buildListShowing, setShowBuildList] = React.useState(false);
  const { height, width } = useWindowDimensions();

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
          style={customStyles({width, height})}
          ariaHideApp={false}
          parentSelector={() => document.querySelector("#root")}
          contentLabel="Gallery Modal"
        >
          <CarouselButtons 
            closeModal={closeModal} 
            showBuildList={showBuildList} 
            buildListShowing={buildListShowing} 
          />
          {buildListShowing && <BuildList bikeDetails={{...bikeDetails, 'User Name': userName}} />}
          <ImageGallery items={photos} />
        </Modal>
      )}
    </div>
  ) : (
    <SimpleBikeCard
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
