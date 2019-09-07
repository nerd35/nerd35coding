import React, {Component} from "react";
import {Field,  reduxForm} from 'redux-form';
import { NavLink } from "react-router-dom";
import '../App.css';

class Signup extends Component {
  render() {
    return (
      <div className="App form-group">
        <form className="text-center border order-light p-5 formfield formsection mx-auto">
        <p className="h4 mb-4 text-white">Signup Here</p>
        <Field
          name="email"
          component="input"
          type="text"
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
          type="password"
          className="form-control mb-4 inputfield mx-auto"
          placeholder=" confirm Password"
        />
        <button className="btn btn-info btn-block my-4 inputfieldbtn mx-auto" type="submit">Login</button>

        <p className="text-white mt-4">Not a member? <NavLink to="/Login" className="text-light registerText">Login</NavLink></p>
        </form>
      </div>
    )
  }
}

Signup = reduxForm ({
  form: 'signup',
}) (Signup);



export default Signup;