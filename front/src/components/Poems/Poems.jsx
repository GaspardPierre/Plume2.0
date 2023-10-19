import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWorks } from "../../reducers/work";
import Carousel from 'react-bootstrap/Carousel';
import Loading from "../Loading/Loading";
import carrouseBg from"../../assets/carrouselImg.jpg";
import ReadMore from "../ReadMore/ReadMore";  
import poemsBg from"../../assets/poems.png";
import './Poems.scss';



// Main component for displaying all poems

export default function Poems() {

  const dispatch = useDispatch();
  const poems = useSelector((state) => state.work.works);
  const workStatus = useSelector((state) => state.work.status);
  const error = useSelector((state) => state.work.error);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };


  // Fetch all poems when component mounts
  useEffect(() => {
    if (workStatus === "idle") {
      dispatch(fetchWorks());
    }
  }, [workStatus, dispatch, poems]);

  // Function to create an excerpt of a poem

  const excerpt = function (str) {
    const summary = str.substring(0, 50) + "...";
    return summary;
  };

  // Function to handle clicking on a poem
  const handlePoemClick = (id) => {
    navigate(`/poem/${id}`);
  };
  let content;
  if (workStatus === "loading") {
    content = <Loading variant="warning" />;
    
  } else if (workStatus === "succeeded") {
    content = (
      <> 
    <div className="container my-5 poems-container d-flex justify-content-center align-items-center"
     style={{ backgroundImage: `url(${poemsBg})` }}>

 
      <div className="d-flex align-items-center justify-content-center carrousel-custom rounded  b-color ">
  
        <div className="" >
          <div className="d-flex justify-content-center py-3 b-color">
  
          </div>
     

     

     
          <Carousel className="m-3" wrap={true} pause={"hover"}>
          
            {poems.map((poem) => (
              <Carousel.Item key={poem.id}>
                <div onClick={() => handlePoemClick(poem.id)}>
                  <img
                    className="d-block w-100 carrousel-image rounded shadow-lg"
                    src={carrouseBg}
                    alt="Placeholder"
                    style={{ backgroundColor: '#f2f8f2' }}
                  />
                  <Carousel.Caption className="">
                    <div className=" excerpt-section  rounded mt-5  ">
                      <h3
                      className="font-title-md mt-3 font custom font-color ">{poem.title}</h3>
                      <p
                      className="font-excerpt-md mt-3 text-center font-italic w-25 font custom font-color fst-italic ">{poem.author}</p>
                      <p
                      className="font-excerpt-md poem-excerpt px-1 text-right font-italic font-custom font-color">{excerpt(poem.content)}</p>
                         <ReadMore />
                    </div>
                
                   
                   
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
     
         
        </div>
      
      </div>
      </div>
      </>
    );
  } else if (workStatus === "failed") {
    content = <div>Erreur : {error}</div>;
  }
  return (
    <>
   <div
   className="container d-flex poems-container"
  >
   {content}
   </div>
 

      
    
    </>
  );
}
