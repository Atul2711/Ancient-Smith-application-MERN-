
import "./profile.css";
import React ,{useState,useContext}from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import { Context } from "../context/Context";

export default function Settings() {

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilepicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div>
    <Navbar />
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
            src={file ? URL.createObjectURL(file) : PF+user.profilepicture}
               alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={function(event){
                setFile(event.target.files[0])
              }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name"
          onChange={function(event){
            setUsername(event.target.value)
          }}
           />
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email" 

onChange={function(event){
            setEmail(event.target.value)
          }}
          />
          <label>Password</label>
          <input type="password"  name="password" 

onChange={function(event){
            setPassword(event.target.value)
          }}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}