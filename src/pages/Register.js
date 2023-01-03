import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";
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
        <FormRow
          name="name"
          type="text"
          value={userInfo.name}
          handleChange={handleChange}
        />
        {/* email */}
        <FormRow
          name="email"
          type="email"
          value={userInfo.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          name="password"
          type="password"
          value={userInfo.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
