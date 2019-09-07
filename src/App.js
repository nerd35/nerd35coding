import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import "./App.css";



function App() {


  return (

    <BrowserRouter>
    <Navigation />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
