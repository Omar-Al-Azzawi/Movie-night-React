import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
