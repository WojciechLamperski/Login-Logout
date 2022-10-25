import { useState } from "react";
import { StyledInputs } from "./styles/Inputs.styled";


export const Inputs:any = ():any => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState('');

    // Ta funkcja jest przypisana do formularza, dlatego nie działa,
    // bo jesteśmy w inputs, które nie mają dostępu do "form"
    function handleSubmit(e : any) : void {
        e.preventDefault();

        const obj = {name: login, password: password};
        console.log(obj);
        const myJSON = JSON.stringify(obj);

        localStorage.setItem('user', myJSON);
    } 
    // BUG! ^

    function handleChangeLogin(event:any){
        setLogin(event.target.value);
        console.log(event.target.value);
    }
        
    function handleChangePassword(event:any){
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    return(
        <>
            <StyledInputs onChange={handleChangeLogin} placeholder="login" type="text"></StyledInputs>
            <StyledInputs onChange={handleChangePassword} placeholder="password" type="password"></StyledInputs>
        </>   
    );
}