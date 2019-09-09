import React from "react";
import { NavLink } from "react-router-dom";
import {Field,  reduxForm} from 'redux-form';
import "../App.css"


const Service = () => {
    return (
        <div className="App">
            <div className="container-fluid mb-5 mt-5 serviceDiv">
                <div className="container mt-5 mb-5">
                    <div className="row mt-5 m-5 ">
                        <div className="col-lg-6 col-sm-12 mt-5  mb-5">
                            <h1 className="serviceHeading  text-white">Our Services</h1>
                            <p className="serviceText mt-5 text-white">
                                Under this section you Put a brief discription of your company, your most important skills goes here...
                            </p>
                            <ul className="mb-5">
                                <li className="servicePoint mt-2">
                                    <p>We provide the best user experience</p>
                                </li>
                                <li  className="servicePoint mt-2">
                                    <p>We provide the best user experience</p>
                                </li>
                                <li  className="servicePoint mt-2">
                                    <p>We provide the best user experience</p>
                                </li>
                            </ul>
                            <NavLink to="/About" className="btn btn-white bg-white  text-center serviceLink">About us</NavLink>
                        </div>
                        <div className="formsection col-lg-6 col-sm-12 mb-5 mx-auto text-center border border-warning bg-warning">
                            <h1 className="mt-5 text-center logintext mb-3">Contact us</h1>
                            <input className=" form-input loginInput w-75 mt-5" type="email" placeholder=" Email" />
                            <textarea className=" form-input w-75 mt-4 mb-5 h-20" type="Password" placeholder=" Enter your message here"></textarea>
                            <button className="btn btn-white bg-white mt-3 serviceBtn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5 servicsection">
                <div className="row mt-5 mb-5">
                    <div className="col-lg-12 col-sm-12 mt-5 mx-auto text-center">
                        <h1  className="whatwedo mb-3">What we do</h1>
                    </div>
                    <div className="col-lg-12 col-sm-12 mx-auto text-center">
                        <p className="whatwedotext">We use different framework in developing your website</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4 col-sm-12 mt-5 mx-auto  mb-5 text-center">
                    <i className="fab fa-react fa-5x mt-3 mb-3 booticon"></i>
                    <h1 className="booticontitle">React js</h1>
                    <p className="booticontext">our skilled team have wide knowledge in creating react web application </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mx-auto text-center">
                    <i className="fab fa-node fa-5x mt-3 mb-3 booticon"></i>
                    <h1 className="booticontitle">Node js</h1>
                    <p className="booticontext">our skilled team have wide knowledge in creating react web application </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mx-auto text-center">
                    <i className="fab fa-html5 fa-5x mt-3 mb-3 booticon"></i>
                    <h1 className="booticontitle">HTML5</h1>
                    <p className="booticontext">our skilled team have wide knowledge in creating react web application </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mx-auto  text-center">
                    <i className="fab fa-sass fa-5x mt-3 mb-3 booticon"></i>
                    <h1 className="booticontitle">Sass</h1>
                    <p className="booticontext">our skilled team have wide knowledge in creating react web application </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mx-auto text-center">
                    <i className="fab fa-php fa-5x mt-3 mb-3 booticon"></i>
                    <h1 className="booticontitle">PHP</h1>
                    <p className="booticontext">our skilled team have wide knowledge in creating react web application </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-5 mx-auto text-center">
                    <i className="fab fa-angular fa-5x mt-3 mb-3 booticon"></i>
                    <h1 className="booticontitle">Angular js</h1>
                    <p className="booticontext">our skilled team have wide knowledge in creating react web application </p>
                    </div>
                </div>

            </div>
            <p className="copyright text-center border-top border-warning mt-5"> ©2019 <span className="copyrightnerd">NERD</span><strong className="copyright35">35</strong> ALL RIGHT RESERVED</p>
        </div>
    );
};


export default Service;