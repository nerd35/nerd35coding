import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';


const Navigation = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-white text-primary navsec fixed-top mb-4">
        <div class="container">
          <NavLink className="navbar-brand mt-2 mb-2 ml-5" to="/">
                <p className="navLogo">NERD<strong class="text-warning logo35">35</strong></p>
              </NavLink>
              <button class="navbar-toggler text-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon texy-warning"></span>
                      </button>

                      <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto navlink">
              <li className="nav-item text-black-50 active navlink">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/">Home
                      <span class="sr-only">(current)</span>
                    </NavLink>
              </li>
              <li className="nav-item text-black-50 avlink">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/About">About</NavLink>
              </li>
              <li className="nav-item text-black">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/Services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/Contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/Login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black-50 lastnav text-center navlink" to="/Signup">Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;