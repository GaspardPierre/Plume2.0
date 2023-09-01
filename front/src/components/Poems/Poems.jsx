import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWorks } from "../../reducers/work";
import Grid from "../Grid/Grid";
import Loading from "../Loading/Loading";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
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
    const summary = str.substring(0, 100) + "...";
    return summary;
  };

  // Function to handle clicking on a poem
  const handlePoemClick = (id) => {
    navigate(`/poem/${id}`);
  };
  let content;
  if (workStatus === "loading") {
    content = <Loading variant="warning" />;
    console.log(Loading);
  } else if (workStatus === "succeeded") {
    console.log(poems, "poems");
    content = (
      <div className="d-flex  align-items-center justify-content-center vh-80 w-80 ">
        <div className="container-fluid-custom" >
          <Grid
            key={poems.id}
            poems={poems.map((poem) => ({
              ...poem,
              excerpt: excerpt(poem.content),
            }))}
            onPoemClick={handlePoemClick}
          />
        </div>
      </div>
    );
  } else if (workStatus === "failed") {
    content = <div>Erreur : {error}</div>;
  }
  return (
    <>
      <header className=" d-flex justify-content-around mt-3 w60">
    
        <HomeButton />
       < LogoutButton />
       </header>
      
      
        <div className="row">
          <h1 className="text-center mb-2">Poèmes</h1>
         
        </div>
    
      {content}
    </>
  );
}
