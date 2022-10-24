import { StyledButton } from "./styles/Button.styled"
export const Button = (props : any): any  => {
    return(
        <StyledButton>{props.text}</StyledButton>
    )
}
