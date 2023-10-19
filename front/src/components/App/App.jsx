
import StyleBox from "../StyleBox/StyleBox";
import React, { useEffect } from "react";
import Header from "../StyleBox/Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../Home/Home';
import Signin from '../Signin/Signin';
import Login from '../Login/Login';
import Poems from '../Poems/Poems';
import Poem from '../Poem/Poem';
import About from '../About/About';
import "./App.scss";


export default function App() {
  const role = useSelector((state) => state.member.role);
  const navigate = useNavigate();
  const isAdmin = role === 'admin';
  console.log('isAdmin', isAdmin);

  // useEffect(() => {

  //   if (isAdmin) {
  //     navigate('/admin');
  //   }
  // }, [isAdmin]);

  return (
    <>
      <div className="d-flex justify-content-end sticky-top pb-2">
        <Header />
      </div>
      <div className="d-flex flex-column  bg-custom-second custom align-items-center">
        <StyleBox >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/poem/:id" element={<Poem />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </StyleBox>
      </div>
    </>
  );
}
