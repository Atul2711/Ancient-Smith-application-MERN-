import React from 'react'

function Footer() {
  const footerStyle={
    display:"flex",
    height:"5vh",
    backgroundColor:"black",
    color:"white",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  }
  const year=new Date().getFullYear();
  return (
    <div style={footerStyle}>
    <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
    <p>  &#169; {year} Ancient Smith </p>
   </div>
  )
}

export default Footer;
