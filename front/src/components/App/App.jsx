import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Signin from "../Signin/Signin";
import Login from "../Login/Login";
import Poems from "../Poems/Poems";
import Novels from "../Novels/Novels";
import Unclassifiable from "../Unclassifiable/Unclassifiable";
import About from "../About/About";

function App() {
  return (
   
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/unclassifiable" element={<Unclassifiable />} />
          <Route path="/about" element={<About />} />
        </Routes>
   
  );
}

export default App;
