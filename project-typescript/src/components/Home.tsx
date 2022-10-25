import { HomeStyled } from "./styles/Home.styled"

export const Home = (props:any) : any => {

    return (
        <HomeStyled>
            <p>
                Witaj w mojej aplikacji <span>{props.user}</span> 
            </p>
        </HomeStyled>
    )
}