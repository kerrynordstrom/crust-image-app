import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import BikesByModel from "./BikesByModel";
import AllBikes from "./AllBikes";

import {bikeModels} from "./bikeForm/BikeModelSelect"

const BikeSelector = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Bikes</h2>

      <ul>
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
      </ul>

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