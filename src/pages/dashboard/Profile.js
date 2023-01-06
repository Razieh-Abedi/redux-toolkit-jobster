import React, { useState } from "react";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { FormRow } from "../../components";

function Profile() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, lastName } = userData;
    if (!name || !email || !location || !lastName) {
      toast.error("Please fill out all the fields!");
      return;
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            value={userData.lastName}
            onChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;
