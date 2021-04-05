import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const bikeModels = [
  {
    displayName: "Lightning Bolt Disc",
    value: "lightningboltdisc",
  },
  {
    displayName: "Lightning Bolt Canti",
    value: "lightningboltcanti",
  },
  {
    displayName: "Lightning Bolt Breakaway",
    value: "lightningboltbreakaway",
  },
  {
    displayName: "Evasion",
    value: "evasion",
  },
  {
    displayName: "Evasion Lite",
    value: "evasionlite",
  },
  {
    displayName: "Romanceur Disc",
    value: "romanceurdisc",
  },
  {
    displayName: "Romanceur Canti",
    value: "romanceurcanti",
  },
  {
    displayName: "Bombora",
    value: "bombora",
  },
  {
    displayName: "Nor'Easter",
    value: "noreaster",
  },
  {
    displayName: "Dreamer",
    value: "dreamer",
  },
  {
    displayName: "Nor'Easter",
    value: "noreaster",
  },
  {
    displayName: "Scapegoat",
    value: "scapegoat",
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BikeModelSelect = ({value, handleChange}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant="outlined" required className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Bike Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value || ""}
          onChange={handleChange}
        >
          {bikeModels.map((model, i) => {
            return <MenuItem 
            key={`${model}-${i}`} 
            value={model.value}>
            {model.displayName}
            </MenuItem>
          })}
        </Select>
        <FormHelperText>Please choose your Crust model</FormHelperText>
      </FormControl>
    </div>
  );
}

export default BikeModelSelect;