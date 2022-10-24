import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";

import { Home } from './Home';
import { Login } from './Login';
import { StyledNavbar } from "./styles/Navbar.styled";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
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
      

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}