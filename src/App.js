import React, {useEffect} from "react";
import {
  Switch,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom";
import withWidth from "@material-ui/core/withWidth";

import BikeSelector from "./app/BikeSelector";
import BikeToApprove from "./app/BikeToApprove";

import "./App.css";
import BikeSubmissionForm from "./app/BikeSubmissionForm";

require("dotenv").config();


function App({width}) {
  let location = useLocation();
  let query = new URLSearchParams(location.search);
  const development = window.location.href.includes('localhost');
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}
    >
      <nav
      id="image-app-nav"
      style={{
        position: "sticky",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "5em",
        backgroundColor: "rgb(208, 228, 230)",
        zIndex: 1000,
      }}
      >
        <ul
          id="image-uploader-nav"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <li className="nav-link">
            <Link to="/upload">Upload Your Crust</Link>
          </li>
          <li className="nav-link">
            <Link to="/bikes">Peep The Bikes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/upload">
          <BikeSubmissionForm />
        </Route>
        <Route path="/bikes">
          <BikeSelector width={width}/>
        </Route>
        <Route path="/bike/:bikeID">
          <BikeToApprove documentID={query.get("documentID")} />
        </Route>
        <Route exact path="/">
          <Redirect to="/bikes" />
        </Route>
        <Route exact path="#/">
          <Redirect to="/bikes" />
        </Route>
      </Switch>
    </div>
  );
}

export default withWidth()(App);
