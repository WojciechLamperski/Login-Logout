import { HomeStyled } from "./styles/Home.styled";

interface HomeProps {
	user?: string | null;
}

export const Home: React.FC<HomeProps> = ({ user }) => {
	return (
		<HomeStyled>
			<p>{user ? `Witaj w mojej aplikacji ${user}` : "Proszę zaloguj się :)"}</p>
		</HomeStyled>
	);
};
