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
    <p>  &#169; {year} Ancient Smith </p>
   </div>
  )
}

export default Footer;
