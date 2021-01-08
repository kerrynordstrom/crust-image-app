import React from "react";
import {
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Upload from "./Upload";
import BikeSelector from "./BikeSelector";
import BikeToApprove from "./BikeToApprove";

import "./App.css";
import BikeSubmissionForm from "./BikeSubmissionForm";

require("dotenv").config();


function App() {
  let location = useLocation();
  let query = new URLSearchParams(location.search);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <nav>
        <ul>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/bikes">Bikes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/upload">
          <BikeSubmissionForm />
          {/* <Upload /> */}
        </Route>
        <Route path="/bikes">
          <BikeSelector />
        </Route>
        <Route path="/bike/:bikeID">
          <BikeToApprove documentID={query.get("documentID")} />
        </Route>
      </Switch>
    </div>
  );
}

export default App
