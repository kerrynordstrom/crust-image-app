import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBikeByID } from "../api/get";
import CarouselBike from "./shared/CarouselBike";
import StyledButton from "./shared/StyledButton";


import { approvePhotos } from '../api/post'

const onSubmit = ({ bikeID, documentID, setDisabled }) => {
  setDisabled(true);
  approvePhotos({bikeID, documentID}).then(() => {
    alert('Photos and description approved!  Window will close 3 seconds after you close this dialog.');
    setTimeout(() => {
      window.location.href = '/'
    }, 3000)
  }).catch(error => {
    console.log('error from approval', error)
    setDisabled(false);
    alert('There was an issue approving the photos.  Please try again.')
  });
};

const BikeToApprove = ({
  documentID,
}) => {
  if (!documentID) {
    window.location.href = '/'
  };

  let { bikeID } = useParams();
  const [bike, setBike] = useState([]);
  const [active, setActive] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [approved, setApproved] = useState(false)
  useEffect(() => {
    let mounted = true;
    getBikeByID(bikeID).then((bike) => {
      if (mounted) {
        setBike(bike);
      }
      if (bike[0] && bike[0].approved) {
        setApproved(bike[0].approved);
      };
    });
    return () => (mounted = false);
  }, [bikeID]);
  return (
    <div 
      style={{
        paddingTop: '200px',
      }}
    >
      <h3>Requested bike ID: {bikeID}</h3>
      <h3>Requested document ID: {documentID} </h3>
      {
        <StyledButton
          type="submit"
          style={{
            zIndex: 9999,
          }}
          onClick={() => onSubmit({ bikeID, documentID, setDisabled })}
          disabled={approved || disabled }
          content={approved ? "Bike Already Approved" : "Click to Approve"}
        />
      }
      {bike.map(({ photos, bikeID, bikeModel, userName, bikeDetails }, i) => {
        return (
          <CarouselBike
            bikeID={bikeID}
            userName={userName}
            bikeDetails={bikeDetails}
            key={bikeID}
            showBike={active}
            setActive={setActive}
            bikeModel={bikeModel}
            photos={photos}
          />
        );
      })}
    </div>
  );
};

export default BikeToApprove;
