import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";

interface UseGetUsersParams {
	login: string;
	password: string;
	setUser: Dispatch<string>;
}

export const useGetUsers = ({ login, password, setUser }: UseGetUsersParams) => {
	const navigate = useNavigate();

	function handleSubmit(e: any): void {
		e.preventDefault();

		const obj = { name: login, password: password };
		console.log(obj);

		setUser(login);

		const myJSON = JSON.stringify(obj);

		localStorage.setItem("user", myJSON);
		navigate("/home");
	}

	return {
		handleSubmit,
	};
};
