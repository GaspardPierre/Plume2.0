import React, { useState, useEffect } from "react";
import banniere from '../../assets/baniere.jpg'
import { useSelector } from "react-redux";
import ReadMore from "../ReadMore/ReadMore";
import "../../scss/styles.scss";

import "./Home.scss";

export default function Home({  }) {

  const [showSeparator, setShowSeparator] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowSeparator(true);
      } else {
        setShowSeparator(false);
      }
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(showSeparator, "showSeparator")







  return (
    <>
      <div className="d-flex banniere-container  ">



        {showSeparator && (
          <div className='separator-content d-flex  justify-content-end ms '>
            <div className='separator-container bg-custom shadow-md '> 
              {/* ... */}
            </div>
          </div>
        )}
        <div className='img-container   position-relative border-home  shadow-md '>
          <img src={banniere} alt='banniere' className='img-fluid roundy shadow-md ' />
          <div className=' section-poem position-absolute   bg-four rounded p-2'>
            <div className='first-poem-container mx-2 py-2 position-relative'>
           
              <h2 className='first-poem text-custom font-custom font-color line mb-1   '>CREATION</h2>   
              <div className='third'>

              </div>
              <p className='text-custom font-custom font-color line mt-3'>Au son createur</p>
              <p className='text-custom font-custom font-color line'>Réponds la grandeur...</p>
              <p className='text-custom font-custom font-color line'>A tes pas, au souffle</p>
              <p className='text-custom font-custom font-color line mb-2'>Icandescence</p>
              <ReadMore />
           <div className="w-50">
        
           </div>
                
               

            </div>

          </div>





        </div>
      </div>
 


    </>


  );
}
