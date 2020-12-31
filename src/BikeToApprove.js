import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBikeByID } from "./api/get";
import CarouselBike from "./CarouselBike";

const BikeByID = () => {
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

export default BikeByID;
