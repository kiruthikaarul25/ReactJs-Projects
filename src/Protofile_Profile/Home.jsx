import React, { useState } from "react";
import "./Home.scss";
import profile from "./kee.jpeg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {

    
    <div className="home">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <i className="fa-regular fa-circle-user"></i>
          <h2>My Profile</h2>
        </div>

        {/* Nav links */}

      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="left">
          <img src={profile} alt="profile" />
        </div>
        <div className="right">
          <h1>Hi, I'm Kiruthika 👋</h1>
          <h3>Java Full Stack Developer | Aspiring Front-end Developer</h3>
          <p>
            Passionate developer skilled in building scalable web applications 
            using Java, Spring Boot, React, and modern technologies.
          </p>

        </div>
      </section>
    </div>
  );
};

export default Home;