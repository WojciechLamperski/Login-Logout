import React from 'react';
import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { Home } from './components/home/Home';
import { Button } from './components/button/Button';
import { Login } from './components/login/Login';
import { Input } from './components/input/Input';
import { Navbar } from './components/navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
