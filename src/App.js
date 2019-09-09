import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Service from "./components/Service";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import "./App.css";



function App() {


  return (

    <BrowserRouter>
    <Navigation />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Service" component={Service} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/LoginForm" component={LoginForm} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
