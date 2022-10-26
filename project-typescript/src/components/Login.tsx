import { Button } from "./Button";
import { Inputs } from "./Inputs";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUsers } from "./useGetUsers";

export const Login = ({
  handleChangeLogin,
  handleChangePassword,
  login,
  password,
  setUser,
}: any): any => {
  const { handleSubmit } = useGetUsers({
    login,
    password,
    setUser,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Inputs
        handleChangeLogin={handleChangeLogin}
        handleChangePassword={handleChangePassword}
      />
      <Button text="Submit"></Button>
    </form>
  );
};
