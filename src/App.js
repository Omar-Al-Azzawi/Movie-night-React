import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import WatchList from "./components/WatchList.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/watch">
            <WatchList />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
