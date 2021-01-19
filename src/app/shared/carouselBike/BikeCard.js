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
  },
  media: {
    height: 140,
  },
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
            {bikeDetails.displayName || bikeDetails["Model"] ||
              bikeDetails.bikeModel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            'I would like to tell you a lot about my bike but the backend does
            not support this yet.'
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
