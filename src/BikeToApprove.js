import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBikeByID } from "./api/get";
import CarouselBike from "./CarouselBike";

import { approvePhotos } from './api/post'

const onSubmit = ({ bikeID, documentID }) => {
  approvePhotos({bikeID, documentID}).then(() => {
    console.log('photos approved for posting')
  }).catch(error => console.log('error from approval', error));
};

const BikeToApprove = ({
  documentID,
}) => {
  let { bikeID } = useParams();
  const [bike, setBike] = useState([]);
  const [active, setActive] = useState(0);
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
      <button type="submit" onClick={onSubmit}>
        Click to Approve
      </button>
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
