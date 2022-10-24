import {
    Routes,
    Route,
    NavLink,
    useNavigate,
  } from "react-router-dom";
  
  import { Home } from '../home/Home';
  import { Login } from '../login/Login';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
      <>
        <nav className="navigation-header">
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
        </nav>
  
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
  }