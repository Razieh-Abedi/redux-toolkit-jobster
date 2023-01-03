import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";
import image from "../assets/images/not-found.svg";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={image} alt="error" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back to home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
