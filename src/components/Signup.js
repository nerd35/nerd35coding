import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from "react-router-dom";
import '../App.css';

const Signup = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-12 col-sm-12 mx-auto mt-5 text-center mb-0">
        <div className="App form-group mb-5">
    <form className=" col-lg-4 col-sm-12 mx-auto text-center border order-light p-5 formfield formsection mx-auto mb-5 " onSubmit={handleSubmit}>
        <p className="h4 mb-4 text-white">Login Here</p>
        <Field
          name="email"
          component="input"
          type="email"
          className="form-control mb-4 inputfield mx-auto"
          placeholder="Email"
        />
        <Field
          name="password"
          component="input"
          type="PASSWORD"
          className="form-control mb-4 inputfield mx-auto"
          placeholder="Password"
        />
        <Field
          name="confirm_password"
          component="input"
          type="PASSWORD"
          className="form-control mb-4 inputfield mx-auto"
          placeholder=" Confirm Password"
        />
        <button className="btn btn-info btn-block my-4 inputfieldbtn mx-auto" type="submit">Login</button>
        <p className="text-white mt-4">Not a member? <NavLink to="./Signup" className="text-light registerText">Register</NavLink></p>
    </form>
      </div>
          </div>
        </div>
        <p className="copyright text-center mt-5 border-top border-warning"> ©2019 <span className="copyrightnerd">NERD</span><strong className="copyright35">35</strong> ALL RIGHT RESERVED</p>
      </div>

  )
}

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(Signup)