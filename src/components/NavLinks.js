import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
//import Wrapper from '../assets/wrappers';

function NavLinks({ toggle }) {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, path, text, icon } = link;
        return (
          <NavLink
            path={path}
            key={id}
            onClick={toggle}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
