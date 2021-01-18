import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllBikes } from "../../api/get";
import CarouselBike from "../shared/CarouselBike";

const AllBikes = () => {
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Requested all bikes</h3>
      <div
        style={{
          display: "block",
        }}
      >
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
    </div>
  );
};

export default AllBikes;
