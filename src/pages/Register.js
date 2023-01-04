import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, loginUser } from "../features/user/userSlice";
//import redux toolkit
//import useNavigator

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [userInfo, setUserInfo] = useState(initialState);

  const toggleMember = () => {
    setUserInfo({ ...userInfo, isMember: !userInfo.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // change object keys dynamically with bracket notations in an object
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = userInfo;
    // the paranthesis: if isMemeber is false, only then check for the name
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all the fields!");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{userInfo.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!userInfo.isMember && (
          <FormRow
            name="name"
            type="text"
            value={userInfo.name}
            handleChange={handleChange}
          />
        )}

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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          {userInfo.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {userInfo.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
