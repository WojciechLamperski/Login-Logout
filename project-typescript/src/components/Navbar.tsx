import { NavLink } from "react-router-dom";

import { StyledNavbar } from "./styles/Navbar.styled";

interface NavbarProps {
	logout: () => void;
	user: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ logout, user }) => {
	return (
		<StyledNavbar>
			<NavLink
				id="home"
				to="/home"
				end
			>
				Home
			</NavLink>
			<NavLink
				onClick={logout}
				id="login"
				to="/login"
				end
			>
				{user ? "Logout" : "Login"}
			</NavLink>
		</StyledNavbar>
	);
};
