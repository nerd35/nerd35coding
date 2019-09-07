import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"


const Home = () => {
    return (
        <div className="App">
            <div className="containier mt-5 border-bottom">
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 mt-5 mb-3 mx-auto text-center">
                        <h1 className="mt-5 Welcomeheading">Designed With<br></br><strong> Bootstrap, React & Redux </strong></h1>
                    </div >

                </div>
                <div className="row mb-5">
                        <div className="col-lg-12 col-sm-12 mx-auto mt-5 text-center ">
                            <h3 className="headetText d-none d-md-block">
                            Redux-Form is yet another awesome Redux library <br/> that gives us a new way to manage  the state of our forms  in  the <br/> React App.
Redux-Form not only integrates the state  of our <br/> form with the other state that is managed by Redux,  but it  also lets us <br/> track the state of the form with precise accuracy using Redux Dev Tools.
                            </h3>
                        </div>
                        <div className="col-lg-12 col-sm-12 mt-5 mx-auto text-center mb-5">
                                <NavLink to="/Login" className="btn mr-4 Hearderbtn">Login</NavLink> <NavLink to="/Signup" className="btn Hearderbtn ">Signup</NavLink>

                        </div>
                    </div>
            </div>
            <div className="Container aboutsection mb-5">
                <div className="row">
                <div className="col-lg-12 col-sm-12 mx-auto mt-5 text-center">
                    <h1 className=" aboutheadline ">OUR SERVICES</h1>
                </div>
                </div>
                <div className="container ">
                <div className="row ">
                    <div className="col-lg-6 col-sm-12 mt-3 mb-3" >
                        <h2 className="border-bottom border-right  border-warning text-center  aboutoption">We Develop all kind of web Applications</h2>
                        <h2 className=" text-center aboutoption border-warning">We Develop all kind of web Applications</h2>
                        <h2 className="border-bottom border-right  border-warning text-center  aboutoption">We Develop all kind of web Applications</h2>
                        <h2 className="border-bottom text-center  border-warning mb-5 aboutoption">We Develop all kind of web Applications</h2>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-3 mb-3" >
                        <h2 className="border-bottom border-right border-warning text-center  aboutoption">We Develop all kind of web Applications</h2>
                        <h2 className=" border-left border-bottom  border-warning text-center aboutoption">We Develop all kind of web Applications</h2>
                        <h2 className="border-bottom   border-warning text-center aboutoption">We Develop all kind of web Applications</h2>
                        <h2 className="border-bottom text-center border-left  border-warning mb-5 aboutoption">We Develop all kind of web Applications</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};


export default Home;