import React from 'react';
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'
import ProfilePage from './pages/Profile';
import PostPage from './pages/Post'
import ComposePage from './pages/Compose';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/profile' exact element={<ProfilePage/>}></Route>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path="/login" exact element={ <LoginPage/> } />
        <Route path="/register" exact element={ <RegisterPage/> } />
        <Route path="/compose" exact element={ <ComposePage/> } />
        <Route path="/post" exact element={ <PostPage/> } />
      </Routes>

    </Router>
  );
}

export default App;
