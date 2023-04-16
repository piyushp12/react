import React from 'react';
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/signup" element={<SignUpForm/>} />
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
