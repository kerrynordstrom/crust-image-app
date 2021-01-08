import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import StyledButton from "./StyledButton"

const BikeForm = ({ setBikeDetails, previousStep,
nextStep,
}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h6" gutterBottom>
        Bike Deets
      </Typography>
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField required id="frameSize" label="Frame size" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField required id="crankset" label="Crankset" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField
            required
            id="chainrings"
            label="Chain Rings"
            helperText="(model/size)"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="frontDerailleur" label="Front Derailleur" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField required id="chain" label="Chain" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField required id="cassette" label="Cassette" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="rearDerailleur" label="Rear Derailleur" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField required id="handlebars" label="Handlebars" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField required id="stem" label="Stem" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="shiftBrakeLevers" label="Shift/Brake Levers" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="frontBrake" label="Front Brake" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="rearBrake" label="Rear Brake" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="seatpost" label="Seat Post" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="saddle" label="Saddle" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="frontHub" label="Front Hub" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="frontRim" label="Front Rim" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="frontTire" label="Front Tire" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="rearHub" label="Rear Hub" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="rearRim" label="Rear Rim" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center">
          <TextField id="rearTire" label="Front Tire" />
        </Grid>
        <Grid item xs={12} md={6} lg={3} align="center"></Grid>
      </Grid>
      <p>
        <StyledButton content="Next Step" onClick={nextStep} />
      </p>
    </div>
  );
};

export default BikeForm;

