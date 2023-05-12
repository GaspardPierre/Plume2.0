import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorks } from "../../reducers/work";
import { Navigate, useNavigate } from "react-router-dom";
import Grid from "../Grid/Grid";
import Poem from "../Poem/Poem";

export default function Poems() {
  const dispatch = useDispatch();
  const poems = useSelector((state) => state.work.works);
  const workStatus = useSelector((state) => state.work.status);
  const error = useSelector((state) => state.work.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (workStatus === "idle") {
      dispatch(fetchWorks());
    }
  }, [workStatus, dispatch]);

  const excerpt = function (str) {
    const summary = str.substring(0, 100) + "...";
    return summary;
  };
  const handlePoemClick = (id) => {
    navigate(`/poem/${id}`);
  };
  let content;
  if (workStatus === "loading") {
    content = <div>Chargement des poèmes...</div>;
  } else if (workStatus === "succeeded") {
    content = (
      <div className="d-flex  align-items-start justify-content-center vh-80">
        <div className="container-fluid-custom">
          <Grid
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
     <header className="header-container container mb-8">
          <div className="row">
            <h1 className="text-center mb-2">Poèmes</h1>
          </div>
        </header>
      {content}
 
    </>
  );
}