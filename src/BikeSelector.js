import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import BikesByModel from "./BikesByModel";

const BikeSelector = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Bikes</h2>

      <ul>
        <li>
          <Link to={`${match.url}/evasion`}>Evasion</Link>
        </li>
        <li>
          <Link to={`${match.url}/lightningbolt`}>Lightning Bolt</Link>
        </li>
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
          <h3>Please select a bike model.</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default BikeSelector;