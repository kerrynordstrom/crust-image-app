import React, { useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";
import Bike from './Bike'
import { getBikesByModel } from './api/get'
import CarouselBike from "./CarouselBike";

const BikesByModel = () => {
  let { bikeModel } = useParams();
  const [bikes, setBikes] = useState([])
  useEffect(() => {
    let mounted = true;
    getBikesByModel(bikeModel).then((bikes) => {
      console.log('bikes', bikes)
      if (mounted) {
        setBikes(bikes);
      }
    });
    return () => mounted = false;
  }, [bikeModel]);
  return (
    <div>
    <h3>Requested bike model: {bikeModel}</h3>
    {
      bikes.map(({photos}) => {
      return (<CarouselBike bikeModel={bikeModel} photos={photos} />)
      })
    }
    </div>
  );
};

export default BikesByModel;