import { useState } from "react";


export const Login = () : any => {

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
        <form>
            <input onChange={handleChangeLogin} placeholder="login" type="text"></input>
            <input onChange={handleChangePassword} placeholder="password" type="password"></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}