import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Profile() {
  const bg={
    background:"black"
  }
  return (
    <div>
    <Navbar style={bg}/>
    <h1>Hello viewer</h1>
    <Footer/>
    </div>
  )

}

export default Profile;
