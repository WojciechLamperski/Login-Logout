import { useState } from "react";
import { StyledInputs } from "./styles/Inputs.styled";


export const Inputs:any = ():any => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState('');
    // const [localObject, setLocalObject] = useState({});
    
    // type localObject = {
    //     login: string;
    //     password: string;
    // }



function handleSubmit(e : any) : void {
    e.preventDefault();
    // setLocalObject({login : password});

    const obj = {name: login, password: password};
    const myJSON = JSON.stringify(obj);

    localStorage.setItem('user', myJSON);
}

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