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
import Allpost from './pages/Allpost';
import { Context } from './context/Context';



function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path="/register" exact element={user?<Home/>: <RegisterPage/>} />
        <Route path="/login" exact element={ user?<Home/>:<LoginPage/> } />
        <Route path='/profile' exact element={user?<ProfilePage/>:<LoginPage/>}></Route>
        <Route path="/compose" exact element={ user?<ComposePage/>: <LoginPage/>} />
        <Route path="/post/:postId" exact element={ <Post/> } />
        <Route path="/sculpture" exact element={ <Allpost/> }/>
      </Routes>

    </Router>
  );
}

export default App;
