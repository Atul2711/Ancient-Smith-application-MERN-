import React from 'react';
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" exact element={ <LoginPage/> } />
        <Route path="/register" exact element={ <RegisterPage/> } />
        <Route path='/' exact element={<Home/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
