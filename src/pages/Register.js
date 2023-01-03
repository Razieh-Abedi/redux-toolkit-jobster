import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import {Logo} from "../components";
//import redux toolkit
//import useNavigator

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [userInfo, setUserInfo] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>login</h3>
        {/* name field */}
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            name
          </label>
          <input
            className="form-input"
            name="name"
            type="text"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            email
          </label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            value={userInfo.password}
            onChange={handleChange}
            name="password"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
