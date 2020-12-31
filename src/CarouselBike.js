import React from "react";
import "./styles/carousel.scss";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';

// Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const CarouselBike = ({showBike, photos, setActive, bikeID, bikeModel}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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

  console.log({bikeID, showBike, showModal: bikeID === showBike})

  return (bikeID === showBike) ? (
    <div>
      {photos.length > 0 && (
        <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Gallery Modal">
        <h2 ref={_subtitle => (subtitle = _subtitle)}>{bikeModel}</h2>
        <button onClick={closeModal}>Close</button>
          <ImageGallery items={photos}/>
        </Modal>
        )}
    </div>
  ) : <img onClick={() => {
    if (photos.length === 0) return;
    openModal();
    setActive(bikeID)
  }} alt="placeholder" src={photos.length > 0 && photos[0].thumbnail ? photos[0].thumbnail : "https://via.placeholder.com/400x200.png?text=Placeholder"}></img>;
};

export default CarouselBike;
