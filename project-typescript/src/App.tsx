import React from 'react';
import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Routes, Route } from "react-router-dom"

import {
  NavLink
} from "react-router-dom";

import { StyledNavbar } from './components/styles/Navbar.styled';

import { Home } from './components/Home';
import { Button } from './components/Button';
import { Login } from './components/Login';
import { Inputs } from './components/Inputs';
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './components/styles/Global.styles';

function App() {   
  
  
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<null | string>(null);

    
    

    function handleChangeLogin(event:any){
        setLogin(event.target.value);
        console.log(event.target.value);
    }
        
    function handleChangePassword(event:any){
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    function logout():any{
      localStorage.clear();
      setUser(null);
    }
  


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar user={user} logout={logout}/>
      <div className='content'>
      <Routes>
        <Route path="home" element={<Home user={user} />} />
        <Route path="login" element={<Login handleChangePassword={handleChangePassword} handleChangeLogin={handleChangeLogin} setUser={setUser}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
