import { Button } from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUsers } from "./useGetUsers";
import { StyledInputs } from "./styles/Inputs.styled";
import React from "react";

interface Login {
	login: string;
	password: string;
	setUser: (e: string) => void;
	setLogin: (e: string) => void;
	setPassword: (e: string) => void;
}

export const Login: React.FunctionComponent<Login> = ({ login, password, setUser, setLogin, setPassword }) => {
	const { handleSubmit } = useGetUsers({ login, password, setUser });

	return (
		<form onSubmit={handleSubmit}>
			<StyledInputs
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
				placeholder="login"
				type="text"
				required
			></StyledInputs>
			<StyledInputs
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
				placeholder="password"
				type="password"
				required
			></StyledInputs>
			<Button text="Submit"></Button>
		</form>
	);
};
