import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Upload from "./Upload";
import BikeSelector from "./BikeSelector";
import BikeToApprove from "./BikeToApprove";

require("dotenv").config();

console.log('process.env', {env: process.env})

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  let query = useQuery();
  return (
    <Router basename={'/'}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Upload">Upload</Link>
            </li>
            <li>
              <Link to="/bikes">Bikes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/bikes">
            <BikeSelector />
          </Route>
          <Route path="/bike/:bikeID">
            <BikeToApprove documentID={query.get("documentID")} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
