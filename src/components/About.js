import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"


const About = () => {
    return (
        <div className="App">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 mt-5 mb-5 text-center">
                        <hi className="aboutsection1 text-center mt-5 mx-auto">About us</hi>
                    </div>
                </div>
            </div>
            <div className="container mt-5mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-lg-4 col-sm-12 text-center border border-info sectiondiv">
                        <h1 className="ourvalue mt-5 mb-3">Our Value</h1>
                        <p className="mt-5 ourvaluetext mb-3">In hear you put your companies core values, what makes you stand out from the crowd and also your objectives...</p>
                        <NavLink to="#" className="btn btn-warning mt-3  readmorebtn">Read more</NavLink>
                    </div>
                    <div className="col-lg-4 col-sm-12 text-center sectiondiv1">
                        <h1 className="ourvalue mt-5 mb-3 text-info">Our Mission</h1>
                        <p className="mt-5 ourvaluetext mb-3 text-info">In hear you put your companies core values, what makes you stand out from the crowd and also your objectives...</p>
                        <NavLink to="#" className="btn btn-warning mt-3 mb-5 readmorebtn readmorebtn1">Read more</NavLink>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-5 text-center border border-warning bg-warning">
                        <h1 className=" ourvalue mt-5 mb-3 text-white">Our Aim</h1>
                        <p className="mt-5 ourvaluetext mb-3 text-white">In hear you put your companies core values, what makes you stand out from the crowd and also your objectives...</p>
                        <NavLink to="#" className="btn btn-info mt-3 mb-5 readmorebtn readmorebtn2">Read more</NavLink>
                    </div>
                </div>
            </div>

            <p className="copyright text-center border-top border-warning"> ©2019 <span className="copyrightnerd">NERD</span><strong className="copyright35">35</strong> ALL RIGHT RESERVED</p>
        </div>
    );
};


export default About;