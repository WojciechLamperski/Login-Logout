import React from 'react';
import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { Routes, Route } from "react-router-dom"

import { Home } from './components/Home';
import { Button } from './components/Button';
import { Login } from './components/Login';
import { Input } from './components/Input';
import { Navbar } from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>

  );
}

export default App;
