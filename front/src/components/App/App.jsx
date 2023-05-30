import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Signin from "../Signin/Signin";
import Login from "../Login/Login";
import Poems from "../Poems/Poems";
import Poem from "../Poem/Poem";
import Novels from "../Novels/Novels";
import Unclassifiable from "../Unclassifiable/Unclassifiable";
import About from "../About/About";
import Admin from "../Admin/Admin";
import AdminNav from "../AdminNav/AdminNav";
import AdminMember from "../AdminMember/AdminMember";
import AddWork from "../AddWork/AddWork";
import AdminWork from "../AdminWork/AdminWork";
import AdminComment from "../AdminComment/AdminComment";
import AdminNote from "../AdminNote/AdminNote";
import bgImage from '../../assets/bg.jpg';
// import Layout from "../Layout/Layout";

import './App.scss'



export default function App() {
  document.documentElement.style.setProperty("--bg-image", `url(${bgImage})`);

  return (
    <div className="content" >
      <Routes>
       
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/poem/:id" element={<Poem />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/unclassifiable" element={<Unclassifiable />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/member" element={<AdminMember />} />
        <Route path="/admin/work" element={<AdminWork />} />
        <Route path="/admin/work/addWork" element={<AddWork />} />
     
        <Route path="/admin/comment" element={<AdminComment />} />
        <Route path="/admin/note" element={<AdminNote />} />
      </Routes>
    </div>
  );
}

