import React from "react";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </>
  );
}

export default App;
