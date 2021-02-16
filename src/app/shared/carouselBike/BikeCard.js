import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px 10px",
  },
  media: {
    height: 140,
  },
});

const truncateDescription = (str, num) => {
  if (!str) return;

  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + '...'
}

const BikeCard = ({
  photo, 
  bikeID,
  bikeDetails = {},
  setActive,
  openModal,
  shouldOpen,
}
) => {
  console.log('bikeDescription in BikeCard', {bikeDetails})

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            className={classes.media}
            component="img"
            image={photo}
            onClick={() => {
              if (!shouldOpen) return;
              openModal();
              setActive(bikeID);
            }}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {bikeDetails.displayName ||
              bikeDetails["Model"] ||
              bikeDetails.bikeModel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {truncateDescription(bikeDetails["Description"], 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            if (!shouldOpen) return;
            openModal();
            setActive(bikeID);
          }}
          size="small"
          color="primary"
        >
          View Bike
        </Button>
      </CardActions>
    </Card>
  );
}

export default BikeCard;
