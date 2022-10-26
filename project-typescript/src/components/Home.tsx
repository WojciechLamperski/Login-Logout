import { HomeStyled } from "./styles/Home.styled";

export const Home = ({ user }: any): any => {
  return (
    <HomeStyled>
      <p>
        {user ? `Witaj w mojej aplikacji ${user}` : "Proszę zaloguj się :)"}
      </p>
    </HomeStyled>
  );
};
