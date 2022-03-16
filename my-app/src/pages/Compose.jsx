import "./compose.css";
import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Write() {

  var [title,setTitle]=useState("");

  function handleChange(event){
    setTitle(event.target.value);
  }
  return (
      <div>
      <Navbar />
    <div className="write">
      <h1 className="Blogheading">{title}</h1>
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormControl">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
         
          <button className="writeSubmit" type="submit">
          Publish
        </button>
        </div>
        <div className="writeFormGroup">
        <input
            onChange={handleChange}
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        
      </form>
    </div>
    <Footer />
    </div>
  );
}