import { useState } from "react";
import { StyledInputs } from "./styles/Inputs.styled";



export const Inputs:any = (props:any):any => {
    return(
        <>
            <StyledInputs onChange={props.handleChangeLogin} placeholder="login" type="text" required></StyledInputs>
            <StyledInputs onChange={props.handleChangePassword} placeholder="password" type="password" required></StyledInputs>
        </>   
    );
}