import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorks } from "../../reducers/work";
import Grid from "../Grid/Grid";
import Poem from "../Poem/Poem";

export default function Poems() {
  const dispatch = useDispatch();
  const poems = useSelector((state) => state.work.works);
  const workStatus = useSelector((state) => state.work.status);
  const error = useSelector((state) => state.work.error);

  useEffect(() => {
    if (workStatus === "idle") {
      dispatch(fetchWorks());
    }
  }, [workStatus, dispatch]);

  const excerpt = function (str) {
    const summary = str.substring(0, 100) + "...";
    return summary;
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
      
          />
        </div>
      </div>
    );
  } else if (workStatus === "failed") {
    content = <div>Erreur : {error}</div>;
  }
  return (
    <>
      <h1 className="text-center mb-8">Poèmes</h1>
      {content}
    </>
  );
}
