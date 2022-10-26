import { Button } from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUsers } from "./useGetUsers";
import { StyledInputs } from "./styles/Inputs.styled";
import { handleChange } from "./useHandleChange";

export const Login = ({
  login,
  password,
  setUser,
  setLogin,
  setPassword,
}: any): any => {
  const { handleSubmit } = useGetUsers({ login, password, setUser });

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputs
        onChange={(event) => setLogin(event.target.value)}
        placeholder="login"
        type="text"
        required
      ></StyledInputs>
      <StyledInputs
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
        type="password"
        required
      ></StyledInputs>
      <Button text="Submit"></Button>
    </form>
  );
};
