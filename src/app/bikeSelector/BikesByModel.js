import React, { useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";
import { getBikesByModel } from '../../api/get'
import CarouselBike from "../shared/CarouselBike";
import UploadSpinner from "../shared/UploadSpinner";

const BikesByModel = () => {
  let { bikeModel } = useParams();
  const [bikes, setBikes] = useState([])
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0)
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getBikesByModel(bikeModel).then((bikes) => {
      if (mounted) {
        setLoading(false);
        setBikes(bikes);
      }
    });
    return () => mounted = false;
  }, [bikeModel]);
  return (
    (bikes.length > 0 && !loading) 
      ? (<div>
          {
            bikes.map(({photos, bikeDetails, userName, bikeID}, i) => {
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
                )
            })
          }
        </div>
        ) : loading 
          ? (<div className="loading-spinner">
              <UploadSpinner loading={loading} size={30} />
            </div>)  
          : (<h1>No bikes yet!</h1>)
  );
};

export default BikesByModel;