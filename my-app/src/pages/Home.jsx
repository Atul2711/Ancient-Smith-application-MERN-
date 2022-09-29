import React,{useState,useEffect} from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import axios from "axios";
import Threedimension from '../components/Threedimension'

import { useLocation } from "react-router";

//Home Page will have navbar,Hero,card(carousel)*3,footer component

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts"+search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
    <Navbar />
    <Hero />
    <Threedimension/>
    <Carousel title="Sculpture" posts={posts} />
     <Carousel title="Projects" posts={posts}  />
    <Carousel title="Tutorials" posts={posts}  /> 

    <Footer />
    </div>
  )

}

export default Home;
