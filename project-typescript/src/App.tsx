import React from 'react';
import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { Routes, Route } from "react-router-dom"

import {
  NavLink
} from "react-router-dom";

import { StyledNavbar } from './components/styles/Navbar.styled';

import { Home } from './components/Home';
import { Button } from './components/Button';
import { Login } from './components/Login';
import { Input } from './components/Input';
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './components/styles/Global.styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar/>
      <div className='content'>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
