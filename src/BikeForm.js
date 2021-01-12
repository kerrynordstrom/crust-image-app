import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import StyledButton from "./StyledButton"
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
            value={bikeDetails.bikeModel}
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
            label="Frame size"
            helperText="ex: 52cm, M, Extra Medium"
            onBlur={onChange("frameSize")}
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
            onBlur={onChange("crankset")}
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
            onBlur={onChange("chainring")}
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
            onBlur={onChange("frontDerailleur")}
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
            onBlur={onChange("chain")}
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
            onBlur={onChange("cassetteOrCog")}
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
            onBlur={onChange("rearDerailleur")}
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
            onBlur={onChange("handlebars")}
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
            onBlur={onChange("stem")}
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
            onBlur={onChange("shiftOrBrakeLevers")}
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
            onBlur={onChange("frontBrake")}
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
            onBlur={onChange("rearBrake")}
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
            onBlur={onChange("seatpost")}
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
            onBlur={onChange("saddle")}
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
            onBlur={onChange("frontHub")}
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
            onBlur={onChange("frontRim")}
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
            onBlur={onChange("frontTire")}
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
            onBlur={onChange("rearHub")}
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
            onBlur={onChange("rearRim")}
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
            onBlur={onChange("rearTire")}
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
            onBlur={onChange("accessories")}
          />
        </Grid>
      </Grid>
      <StyledButton content="Next Step" onClick={nextStep} />
    </div>
  );
};

export default BikeForm;

