import React, { useState, useEffect } from "react";
import banniere from '../../assets/baniere.jpg'
import { useSelector , useDispatch } from 'react-redux' 
import { selectLatestWork } from "../../selectors/workSelector";
import { fetchLatestWork } from "../../reducers/work";
import ReadMore from "../ReadMore/ReadMore";
import "../../scss/styles.scss";
import "./Home.scss";

const LatestWork = ({ latestWork }) => {
  if (!latestWork) {
    return <p>Pas de nouveau travail pour l'instant.</p>;
  }

  const formattedContent = latestWork.content
    // Replace <p> with \n
    .replace(/<\/p>/g, '\n')
    .replace(/<p>/g, '');

  
  const maxLength = 250; 
  let truncatedContent = formattedContent;
  
  if (formattedContent.length > maxLength) {
    truncatedContent = formattedContent.substring(0, maxLength) + '...';
  }

  // Display the truncated content
  return (
    <div>
      <p className='text-custom font-custom font-color line mt-3 mt-md-1 mt-lg-3'>
        {truncatedContent}
      </p>
    </div>
  );
};


export default function Home({  }) {
  const [showSeparator, setShowSeparator] = useState(false);
  const dispatch = useDispatch();
  const latestWork = useSelector(selectLatestWork);

  useEffect(() => {
 dispatch(fetchLatestWork()); 
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
  }, [dispatch]);
  return (
    <>
      <div className="d-flex banniere-container  ">
        <div>
        </div>
        {showSeparator && (
          <div className='separator-content d-flex  justify-content-end ms '>
            <div className='separator-container separator-color shadow-md '> 
              {/* ... */}
            </div>
          </div>
        )}
        <div className='img-container   position-relative border-home  shadow-md '>
          <img src={banniere} alt='banniere' className='img-fluid roundy shadow-md ' />
          <div className=' section-poem position-absolute   section-color rounded p-2'>
            <div className='first-poem-container mx-2 py-2 mx-md-4 my-md-4 position-relative'>
              <h2 className='first-poem display-7 text-custom  text-uppercase font-custom font-color line mb-1  '>  {latestWork ? latestWork.title : 'Chargement...'}</h2>   
              <div className='third'>
              </div>
           {/*<p className='text-custom font-custom font-color line mt-3'>Au son createur</p>
              <p className='text-custom font-custom font-color line'>Réponds la grandeur...</p>
              <p className='text-custom font-custom font-color line'>A tes pas, au souffle</p>
              <p className='text-custom font-custom font-color line mb-2'>Icandescence</p> */}
              <LatestWork latestWork={latestWork} />
              <ReadMore latestWork={latestWork}/>
           <div className="w-50">
           </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
