import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import StyledButton from "../shared/StyledButton"
import BikeModelSelect from "./bikeForm/BikeModelSelect";
import Disclaimer from "./bikeForm/Disclaimer"

const useStyles = makeStyles((theme) => {
  console.log("theme ", { theme });
  return {
    root: {
      padding: theme.spacing(1),
    },
  };
});


const BikeForm = ({ bikeDetails, setBikeDetails, previousStep,
  nextStep,
}) => {
  const classes = useStyles();
  const onChange =  (key) => (event) => {
    if (event.target.value === "") return;
    console.log('within onChange', {key})
    setBikeDetails({ ...bikeDetails, [key]: event.target.value });
  }
  console.log('bikeDetails w/in BikeForm', {bikeDetails})
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h6" gutterBottom>
        Bike Deets
      </Typography>
      <Disclaimer />
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid
          className={classes.root}
          item
          xs={12}
          md={12}
          lg={12}
          align="center"
        >
          <BikeModelSelect
            value={bikeDetails["Bike Model"]}
            handleChange={onChange("Bike Model")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="frameSize"
            label="Frame Size"
            helperText="ex: 52cm, M, Extra Medium"
            onBlur={onChange("Frame Size")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="crankset"
            label="Crankset"
            onBlur={onChange("Crankset")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="chainrings"
            label="Chain Ring(s)"
            onBlur={onChange("Chainring")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            id="frontDerailleur"
            label="Front Derailleur"
            onBlur={onChange("Front Derailleur")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="chain"
            label="Chain"
            onBlur={onChange("Chain")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="cassette"
            label="Cassette/Cog"
            onBlur={onChange("Cassete Or Cog")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            id="rearDerailleur"
            label="Rear Derailleur"
            onBlur={onChange("Rear Derailleur")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="handlebars"
            label="Handlebars"
            onBlur={onChange("Handlebars")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="stem"
            label="Stem"
            onBlur={onChange("Stem")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            id="shiftBrakeLevers"
            label="Shift/Brake Levers"
            onBlur={onChange("Shift Or Brake Levers")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            id="frontBrake"
            label="Front Brake"
            onBlur={onChange("Front Brake")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            id="rearBrake"
            label="Rear Brake"
            onBlur={onChange("Rear Brake")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="seatpost"
            label="Seat Post"
            onBlur={onChange("Seatpost")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="saddle"
            label="Saddle"
            onBlur={onChange("Saddle")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="frontHub"
            label="Front Hub"
            onBlur={onChange("Front Hub")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="frontRim"
            label="Front Rim"
            onBlur={onChange("Front Rim")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="frontTire"
            label="Front Tire"
            onBlur={onChange("Front Tire")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="rearHub"
            label="Rear Hub"
            onBlur={onChange("Rear Hub")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="rearRim"
            label="Rear Rim"
            onBlur={onChange("Rear Rim")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={3}
          align="center"
        >
          <TextField
            required
            id="rearTire"
            label="Rear Tire"
            onBlur={onChange("Rear Tire")}
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={12}
          lg={12}
          align="center"
        >
          <TextField
            id="accessories"
            label="Accessories"
            multiline
            rows={5}
            rowsmax={10}
            helperText="(racks/lights/bags/safety 'za)"
            onBlur={onChange("Accessories")}
          />
        </Grid>
      </Grid>
      <StyledButton content="Next Step" onClick={
        () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          nextStep()
        }
      } />
    </div>
  );
};

export default BikeForm;

