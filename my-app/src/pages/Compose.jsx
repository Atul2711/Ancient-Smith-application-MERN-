import "./compose.css";
import React,{useState,useContext} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import { Context } from "../context/Context";


export default function Write() {

  var [title,setTitle]=useState("");
  var [content,setContent]=useState("");
  var [file,setFile]=useState(null);
  const {user}=useContext(Context);
  function handleChange(event){
    setTitle(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      content,
    }; 
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
      <div>
      <Navbar />
    <div className="write">
      <h1 className="Blogheading">{title}</h1>
      {file && (
        <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormControl">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }}
          onChange={function(event){
            setFile(event.target.files[0])
          }}
           />
         
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
            onChange={function(event){
                setContent(event.target.value)
            }}
          />
        </div>
        
      </form>
    </div>
    <Footer />
    </div>
  );
}