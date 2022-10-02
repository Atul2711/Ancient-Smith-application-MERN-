import React, { useContext } from 'react';
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'
import ProfilePage from './pages/Profile';
import Post from './pages/Post'
import ComposePage from './pages/Compose';
import { Context } from './context/Context';



function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path="/register" exact element={<RegisterPage/>} />
        <Route path="/login" exact element={ <LoginPage/> } />
        <Route path='/profile' exact element={<ProfilePage/>}></Route>
        <Route path="/compose" exact element={<ComposePage/>} />
        <Route path="/post/:postId" exact element={ <Post/> } />
      </Routes>

    </Router>
  );
}

export default App;
