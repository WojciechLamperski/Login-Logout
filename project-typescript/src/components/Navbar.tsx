import {
  NavLink,
} from "react-router-dom";

import { StyledNavbar } from "./styles/Navbar.styled";

export const Navbar:any = ():any => {
  return(
  <StyledNavbar>
      <NavLink
          id="home"
          className={({ isActive }) =>
            isActive ? "menu-item__active menu-item" : "menu-item"
          }
          to="/home"
          end
        >
          Home
      </NavLink>
      <NavLink
          id="login"
          className={({ isActive }) =>
            isActive ? "menu-item__active menu-item" : "menu-item"
          }
          to="/login"
          end
        >
          Login
      </NavLink>
    </StyledNavbar>
  );
}