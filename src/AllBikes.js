import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllBikes } from "./api/get";
import CarouselBike from "./CarouselBike";

const BikesByModel = () => {
  const [bikes, setBikes] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let mounted = true;
    getAllBikes().then((bikes) => {
      console.log("bikes", bikes);
      if (mounted) {
        setBikes(bikes);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div>
      <h3>Requested all bikes</h3>
      {bikes.map(({ photos, bikeDetails, bikeID }, i) => {
        return (
          <CarouselBike
            bikeID={bikeID}
            bikeDetails={bikeDetails}
            key={bikeID}
            showBike={active}
            setActive={setActive}
            photos={photos}
          />
        );
      })}
    </div>
  );
};

export default BikesByModel;
