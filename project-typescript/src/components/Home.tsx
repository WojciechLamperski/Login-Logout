import { HomeStyled } from "./styles/Home.styled";

export const Home = (props: any): any => {
  return (
    <HomeStyled>
      <p>
        {props.user
          ? `Witaj w mojej aplikacji ${props.user}`
          : "Proszę zaloguj się :)"}{" "}
      </p>
    </HomeStyled>
  );
};
