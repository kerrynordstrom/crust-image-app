import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Upload from "./Upload";
import BikeSelector from "./BikeSelector";

require("dotenv").config();

console.log('process.env', {env: process.env})

function App() {
  return (
    <Router>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App
