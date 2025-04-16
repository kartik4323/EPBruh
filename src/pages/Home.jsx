// pages/Home.jsx
import React from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
