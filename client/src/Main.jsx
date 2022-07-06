import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Listings from "./pages/Listings.jsx";
import About from "./pages/About.jsx";
import Forum from "./pages/Forum.jsx";
import Contact from "./pages/Contact.jsx";
import Screens from "./pages/Screens.jsx";
import Places from "./pages/Places.jsx";
import Way from "./pages/Way.jsx";
import Class from "./pages/Class.jsx";
import Payment from "./pages/Payment";
import Viewing from "./pages/Viewing.jsx";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/listings" element={<Listings />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/forum" element={<Forum />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/screens" element={<Screens />} />
        <Route exact path="/places" element={<Places />} />
        <Route exact path="/way" element={<Way />} />
        <Route exact path="/class" element={<Class />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/viewing" element={<Viewing />} />
      </Routes>
    </div>
  );
};

export default Main;
