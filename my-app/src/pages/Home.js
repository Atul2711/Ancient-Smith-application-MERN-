import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

//Home Page will have navbar,Hero,card(carousel)*3,footer component

function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Carousel title="Scultpures" />
    <Carousel title="Projects" />
    <Carousel title="Tutorials" />

    <Footer />
    </div>
  )

}

export default Home;
