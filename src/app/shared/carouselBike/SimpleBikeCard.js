import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 150,
    margin: "20px 10px",
  },
  media: {
    height: 140,
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  }
});

const BikeCard = ({
  photo, 
  bikeID,
  bikeDetails = {},
  setActive,
  openModal,
  shouldOpen,
}
) => {

  const classes = useStyles();
  const resolvedName = () => bikeDetails ? bikeDetails.displayName ||
  bikeDetails["Model"] ||
  bikeDetails.bikeModel : null;

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          if (!shouldOpen) return;
          openModal();
          setActive(bikeID);
        }}
      >
        <CardContent className={classes.cardContent}>
          <img 
            src={photo} 
            alt={resolvedName()} />
          <div style={{
            marginTop: "-62px",
            opacity: 0.75,
            backgroundColor: "white",
          }}>
            <Typography 
              variant="h6" 
            >
              {resolvedName()}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BikeCard;
