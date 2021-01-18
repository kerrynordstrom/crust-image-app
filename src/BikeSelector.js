import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

import BikesByModel from "./BikesByModel";
import AllBikes from "./AllBikes";
// import BikeModelSelect from "./bikeForm/BikeModelSelect";

import {bikeModels} from "./bikeForm/BikeModelSelect"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BikeSelector = ({ value, handleChange }) => {
  let match = useRouteMatch();
  const classes = useStyles();
  const [model, selectModel] = useState("");
  console.log({model})
  const detailsModalOpen = false;
  return (
    <div>
      <h2>Bikes</h2>
      <div style={{display: detailsModalOpen ? 'none' : 'inherit'}}>
        <FormControl
          variant="outlined"
          required
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Bike Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value || ""}
            onChange={handleChange}
          >
            {bikeModels.map((model, i) => {
              return (
                <MenuItem className={classes.foo} key={`${model}-${i}`} value={model.value}>
                <Link
                onClick={() => selectModel(model.value)}
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

      { /* <ul style={{ display: "none" }}>
        {bikeModels.map((model) => {
          return (
            <li>
              <Link to={`${match.url}/${model.value}`}>
                {model.displayName}
              </Link>
            </li>
          );
        })}
        <Link to={`${match.url}`}>Back to All Bikes</Link>
      </ul> */}

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