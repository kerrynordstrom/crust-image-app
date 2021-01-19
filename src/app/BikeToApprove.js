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

  console.log('documentID from query', {documentID})
  let { bikeID } = useParams();
  const [bike, setBike] = useState([]);
  const [active, setActive] = useState(0);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    let mounted = true;
    getBikeByID(bikeID).then((bike) => {
      if (mounted) {
        setBike(bike);
      }
    });
    return () => (mounted = false);
  }, [bikeID]);
  return (
    <div>
      <h3>Requested bike ID: {bikeID}</h3>
      <h3>Requested document ID: {documentID} </h3>
      {
        <StyledButton
          type="submit"
          onClick={() => onSubmit({ bikeID, documentID, setDisabled })}
          disabled={disabled}
          content="Click to Approve"
        />
      }
      {bike.map(({ photos, bikeID, bikeModel }, i) => {
        return (
          <CarouselBike
            bikeID={bikeID}
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
