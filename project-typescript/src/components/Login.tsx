import { Button } from "./Button";
import { Inputs } from "./Inputs";
import { Navigate, useNavigate } from "react-router-dom";


export const Login = ({handleChangeLogin, handleChangePassword, login, password, setUser} : any) : any => {

    const navigate = useNavigate();

    function handleSubmit(e : any) : void {

        e.preventDefault();

        const obj = {name: login, password: password};
        console.log(obj);

        setUser(login);

        const myJSON = JSON.stringify(obj);

        localStorage.setItem('user', myJSON);
        navigate("/home");
    } 
    
    return(
        <form onSubmit={handleSubmit}>
            <Inputs handleChangeLogin = {handleChangeLogin} handleChangePassword={handleChangePassword}/>
            <Button text="Submit"></Button>
        </form>
    )
}
