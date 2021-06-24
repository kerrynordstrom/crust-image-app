import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

import BikesByModel from "./bikeSelector/BikesByModel";
import AllBikes from "./bikeSelector/AllBikes";

import {bikeModels} from "./bikeSubmissionForm/bikeForm/BikeModelSelect"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    display: 'flex',
    flexDirection: 'column',
  }, 
  input: {
    width: "78%",
  },
}));

const BikeSelector = ({ value, handleChange, width }) => {
  let match = useRouteMatch();
  const classes = useStyles();
  const [model, selectModel] = useState("");
  const [displayName, setDisplayName] = useState('All');
  const detailsModalOpen = false;
  console.log('value, displayName', {value, displayName})
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "255px",
        position: "sticky",
      }}
    >

      <div
        style={{
          display: detailsModalOpen ? "none" : "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl
          variant="outlined"
          required
          className={classes.formControl}
        >
          <InputLabel id="bike-selection-dropdown">Bike Model</InputLabel>
          <Select
            labelId="bike-selection-dropdown-label"
            id="bike-selection-dropdown"
            // className={classes.select}
            classes={{
              select: classes.select,
              input: classes.input,
            }}
            value={displayName || ""}
            onChange={handleChange}
          >
            {bikeModels.map((model, i) => {
              return (
                <MenuItem
                  key={`${model}-${i}`}
                  value={model.displayName}
                  style={{
                    marginLeft: "20px"
                  }}
                >
                  <Link
                    onClick={() => {
                      selectModel(model.value)
                      setDisplayName(model.displayName)
                    }}
                    to={`${match.url}/${model.value}`}
                  >
                    {model.displayName}
                  </Link>
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Please choose your Crust model</FormHelperText>
        </FormControl>
      </div>
      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:bikeModel`}>
          <BikesByModel />
        </Route>
        <Route path={match.path}>
          <AllBikes />
        </Route>
      </Switch>
    </div>
  );
};

export default BikeSelector;