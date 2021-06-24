import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import StyledButton from "../shared/StyledButton"
import BikeModelSelect from "./bikeForm/BikeModelSelect";
import CharLimitTextField from "./bikeForm/CharLimitTextField";
import Disclaimer from "./bikeForm/Disclaimer"

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1),
    },
  };
});

const requiredFields = ["Email Address", "Name", "Bike Model", "Description", "Frame Size", "Bottom Bracket", "Crank Set", "Chainring", "Pedals", "Chain", "Cassette or Cog", "Handlebars", "Stem", "Headset", "Seat Post", "Saddle", "Front Hub", "Front Rim", "Front Tire", "Rear Hub", "Rear Rim", "Rear Tire"];

const checkRequired = (bikeDetails) => {
  const reqFulfilled = requiredFields.every(k => bikeDetails[k] !== '' && bikeDetails[k] !== null && bikeDetails[k] !== undefined)
  return reqFulfilled;
}


const BikeForm = ({ bikeDetails, setBikeDetails, previousStep,
  nextStep,
}) => {
  const classes = useStyles();

  const onChange =  (key) => (event) => {
    // if (event.target.value === "") return;
    setBikeDetails({ ...bikeDetails, [key]: event.target.value });
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5em"}}
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
            required
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
          <CharLimitTextField
            id="description"
            label="Description"
            dataRef="Description"
            onChange={onChange}
            fieldName="Description"
            charLimit={255}
            helperText="(Give us a tall tale about your Crust)"
            multiLine
            numRows={3}
            rowsMax={10}
            fullWidth
            required
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
          <CharLimitTextField
            id="email"
            label="Email Address"
            dataRef="Email Address"
            onChange={onChange}
            fieldName="Email Address"
            charLimit={128}
            helperText="Please input your email address"
            fullWidth
            required
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
          <CharLimitTextField
            id="userName"
            label="User Name"
            dataRef="User Name"
            onChange={onChange}
            fieldName="User Name"
            charLimit={64}
            helperText="Please input a handle or your real name if you'd like"
            fullWidth
            required
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="frameSize"
            onChange={onChange}
            label="Frame Size"
            dataRef="Frame Size"
            charLimit={16}
            helperText="ex: 52cm, M, Extra Medium"
            required
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="bottomBracket"
            onChange={onChange}
            label="Bottom Bracket"
            dataRef="Bottom Bracket"
            charLimit={64}
            helperText="ex: Shimano UN26 English 110.5mm"
            required
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="crankset"
            onChange={onChange}
            label="Crankset"
            dataRef="Crank Set"
            charLimit={32}
            helperText="ex: White Industries VBC"
            required
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="chainrings"
            label="Chain Ring(s)"
            dataRef="Chainring"
            onChange={onChange}
            charLimit={16}
            helperText="ex: 42-32, 28t, 46/42/28"
            required
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="pedals"
            label="Pedals"
            dataRef="Pedals"
            onChange={onChange}
            charLimit={16}
            helperText="ex: MKS XC-III"
            required
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="frontDerailleur"
            label="Front Derailleur"
            dataRef="Front Derailleur"
            onChange={onChange}
            charLimit={32}
            helperText="ex: Campagnolo Super Record"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="chain"
            label="Chain"
            dataRef="Chain"
            onChange={onChange}
            charLimit={32}
            required
            helperText="ex: SRAM PC-1170, Sedisport Grand Tourisme 6spd"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="cassette"
            label="Cassette/Cog"
            dataRef="Cassette or Cog"
            onChange={onChange}
            charLimit={32}
            required
            helperText="ex: SRAM PG-1130 11-42t, All City 18t"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="rearDerailleur"
            label="Rear Derailleur"
            dataRef="Rear Derailleur"
            onChange={onChange}
            charLimit={32}
            helperText="ex: Huret Jubilee, Shimano XTR M970"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="handlebars"
            label="Handlebars"
            dataRef="Handlebars"
            onChange={onChange}
            required
            charLimit={32}
            helperText="ex: Crust Jungle Runner"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="stem"
            label="Stem"
            dataRef="Stem"
            onChange={onChange}
            required
            charLimit={128}
            helperText="ex: Nitto x Crust UI Quill Stem, Crust 40mm LD Raw Stem"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="headset"
            label="Headset"
            dataRef="Headset"
            onChange={onChange}
            required
            charLimit={64}
            helperText="ex: Inverted Chris King,Stronglight Roller Bearing"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="shiftBrakeLevers"
            label="Shift/Brake Levers"
            dataRef="Shift or Brake Levers"
            onChange={onChange}
            charLimit={64}
            helperText="ex: TRP RRL SR Black, SRAM Force 10spd Black"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="shifters"
            label="Shifters"
            dataRef="Shifters"
            onChange={onChange}
            charLimit={64}
            helperText="ex: Shimano 105 bar end,
            Simplex retrofriction downtube"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="frontBrake"
            label="Front Brake"
            dataRef="Front Brake"
            onChange={onChange}
            charLimit={64}
            helperText="ex: Crust Palm Oil"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="rearBrake"
            label="Rear Brake"
            dataRef="Rear Brake"
            onChange={onChange}
            charLimit={64}
            helperText="ex: Crust Palm Oil"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="seatpost"
            label="Seat Post"
            dataRef="Seat Post"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: Nitto S65 27.2 Black"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="saddle"
            label="Saddle"
            dataRef="Saddle"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: Brooks C17 Special Black w/ Gold Rivets, Selle Italia Turbo"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="frontHub"
            label="Front Hub"
            dataRef="Front Hub"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: 32h Black QR SON Dynamo"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="frontRim"
            label="Front Rim"
            dataRef="Front Rim"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: 32h Black Velocity Blunt 35 27.5"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="frontTire"
            label="Front Tire"
            dataRef="Front Tire"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: Ultradynamico Cava 650b x 47.99"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="rearHub"
            label="Rear Hub"
            dataRef="Rear Hub"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: 36h 142/12 Thru Onyx Vesper MTB XDR"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="rearRim"
            label="Rear Rim"
            dataRef="Rear Rim"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: 32h Black Velocity Blunt 35 27.5"
          />
        </Grid>
        <Grid
          className={classes.root}
          item
          xs={12}
          md={6}
          lg={4}
          align="center"
        >
          <CharLimitTextField
            id="rearTire"
            label="Rear Tire"
            dataRef="Rear Tire"
            onChange={onChange}
            charLimit={64}
            required
            helperText="ex: Ultradynamico Cava 650b x 47.99"
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
          <CharLimitTextField
            id="accessories"
            label="Accessories"
            dataRef="Accessories"
            fullWidth
            multiline
            rows={3}
            rowsmax={5}
            helperText="(racks/lights/bags/safety 'za)"
            onChange={onChange}
          />
        </Grid>
      </Grid>
      <StyledButton
        content="Next Step"
        disabled={!checkRequired(bikeDetails)}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          nextStep();
        }}
      />
    </div>
  );
};

export default BikeForm;

