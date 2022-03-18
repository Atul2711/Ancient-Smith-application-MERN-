import React,{ useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import "./SinglePostStyle.css"


function SinglePost() {
  const location = useLocation();
  //get id from path
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
 const PF = "http://localhost:5000/images/";
 const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.content);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };


  return (
    <div>
    {post.photo && 
      ( <img src={PF+post.photo} alt="" id='banner'>
        </img>)
    }

    <div className="Blogcontent">
    {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) :
   (<h1 className='Blog_Heading'>
    {title}
    {post.username===user.username && (
      <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"
            onClick={function(){
              setUpdateMode(true)
            }}
            ></i>
            
            <i className="singlePostIcon far fa-trash-alt"
            onClick={handleDelete}
            ></i>
    </div>
    )}
    </h1>
   )}
    <div className='singlePostAuthor'>
      <p>Created at: {new Date(post.createdAt).toDateString()}</p>
    </div>
    
    <div className='singlePostAuthor'>
      <p>Author: <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link> </p>
    </div>
  
    {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
        </div>           
 
    </div>
  )
}

export default SinglePost;
