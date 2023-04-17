import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Signin from "../Signin/Signin";
import Login from "../Login/Login";
import Poems from "../Poems/Poems";
import Novels from "../Novels/Novels";
import Unclassifiable from "../Unclassifiable/Unclassifiable";
import About from "../About/About";
// import Layout from "../Layout/Layout";
import bgImage from '../../assets/background.jpg';
import './App.scss'

export default function App() {
  return (
    <div className="main__container" style={{ backgroundImage: `url(${bgImage})` }}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/unclassifiable" element={<Unclassifiable />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
