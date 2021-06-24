import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { getAllBikes } from "../../api/get";
import CarouselBike from "../shared/CarouselBike";
import UploadSpinner from "../shared/UploadSpinner";

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
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getAllBikes().then((bikes) => {
      if (mounted) {
        setLoading(false);
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
    {(bikes.length > 0 && !loading) ? (
      <div className={classes.root}>
        <Grid container spacing={12} className={classes.container}>
          {bikes.map(({ photos, bikeDetails, userName, bikeID }, i) => {
            return (
              <CarouselBike
                bikeID={bikeID}
                userName={userName}
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
        ) : loading 
          ? (<div className="loading-spinner">
              <UploadSpinner loading={loading} size={30} />
            </div>) 
          : (<h1>No bikes yet!</h1>)
    }
    </div>
  );
};

export default AllBikes;
