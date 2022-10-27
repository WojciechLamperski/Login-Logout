import { StyledButton } from "./styles/Button.styled";

interface ButtonProps {
	text: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
	return <StyledButton>{text}</StyledButton>;
};
