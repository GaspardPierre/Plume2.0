import React, { useState, useEffect, useMemo } from "react";
import "./StyleBox.scss";
import Footer from "./Footer";

import "./Footer.scss";
import Title from "./Title";

export default function StyleBox({ children }) {
  return (
    <>
      <div className="d-flex flex-column  align-items-center w-100 ">
   
          <Title />
   

        <div className="main-section d-flex w-100 w-md-75  align-items-center my-0 my-md-3 ">
          {children}
        </div>
      </div>
      <div className=" w-100 m-0 f">
        <Footer />
      </div>
    </>
  );
}
