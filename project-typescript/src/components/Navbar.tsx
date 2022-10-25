import {
  NavLink,
} from "react-router-dom";

import { StyledNavbar } from "./styles/Navbar.styled";

export const Navbar:any = ({logout, user}:any):any => {
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
      <NavLink onClick={logout}
          id="login"
          className={({ isActive }) =>
            isActive ? "menu-item__active menu-item" : "menu-item"
          }
          to="/login"
          end
        >
          { user ? 'Logout' : 'Login'}
      </NavLink>
    </StyledNavbar>
  );
}