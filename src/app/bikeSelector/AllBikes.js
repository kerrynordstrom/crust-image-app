import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { getAllBikes } from "../../api/get";
import CarouselBike from "../shared/CarouselBike";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
}));

const AllBikes = () => {
  const classes = useStyles();

  const [bikes, setBikes] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let mounted = true;
    getAllBikes().then((bikes) => {
      if (mounted) {
        setBikes(bikes);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    {bikes.length > 0 ? (
      <div className={classes.root}>
        <Grid container spacing={12} className={classes.container}>
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
        </Grid>
      </div>
    ) :
    (<h1>No bikes yet!</h1>)
    }
    </div>
  );
};

export default AllBikes;
