import "./compose.css";
import React,{useState,useContext, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import { Context } from "../context/Context";


export default function Write() {

  var [title,setTitle]=useState("");
  var [content,setContent]=useState("");
  const [url, seturl] = useState("");
  var [file,setFile]=useState(null);
  const {user}=useContext(Context);

  useEffect(() => {
    try{
    async function upl(){
      const newPost = {
        username: user.username,
        title,
        content,
        photo:url
      };
      try {
        const res = await axios.post("/api/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      } catch (err) {}

    }
    upl();
    }
    catch(e){
      console.log("ff");
    }
    
  }, [url])
  

  function handleChange(event){
    setTitle(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (file) {
      const data =new FormData();
      data.append('file', file)
      data.append('upload_preset','a7zbcbwb')
      try{
        const res=await fetch("https://api.cloudinary.com/v1_1/dww5gv28l/image/upload",{
          method:'POST',
          body:data });

        var f = await res.json();
        console.log(f.url);
        seturl(f.url);
        

      }
      catch(e){
        console.log("error");
      }
      
    }

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