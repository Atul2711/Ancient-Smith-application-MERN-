import React,{useState,useEffect} from 'react'
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { CarouselImage , CardButton} from '../components/CarouselStyle';
import './allpost.css'
import { Heading } from '../globalStyle';


export default function Allpost() {
    //const PF = "http://localhost:5000/images/";
const [posts, setPosts] = useState([]);
  const { search } = useLocation();

   useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    console.log(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
<>
<Navbar/>
<Heading width="auto" inverse mt="1.5rem">
					Sculptures
				</Heading>
{posts.map((el) => (
                
					<div className='card'>
                    
					{el.photo &&(<CarouselImage src={el.photo} />)}
						<h1>{el.title}</h1>
						<p>
							Created at: {new Date(el.createdAt).toDateString()}
                        </p>
						<p>
							{el.content.substr(0,100)}
                            </p>
						<Link to={`/post/${el._id}`}>
						<CardButton>Read More</CardButton>
						</Link>
                </div>
				))}


   <Footer/>
   </>
  )
}
