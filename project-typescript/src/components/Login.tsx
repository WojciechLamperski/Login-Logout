import { Button } from "./Button";
import { Inputs } from "./Inputs";

export const Login = ({handleSubmit , handleChangeLogin, handleChangePassword} : any) : any => {

    return(
        <form onSubmit={handleSubmit}>
            <Inputs handleChangeLogin = {handleChangeLogin} handleChangePassword={handleChangePassword}/>
            <Button text="Submit"></Button>
        </form>
    )
}