import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLabels, fetchWorksByLabel } from "../../reducers/label";

import "./LabelFilter.scss";
import { set } from "react-hook-form";

export default function LabelFilter({ setSelectedWork }) {
  //ERRORS

  const labelError = useSelector((state) => state.label.error);

  // LABELS
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.label.labels);
  console.log(labels);
  const labelStatus = useSelector((state) => state.label.status);

  // WORKS

  const works = useSelector((state) => state.label.works);
  const [labelId, setLabelId] = useState(null);

  const handleLabelClick = (id) => {
   
    setLabelId(id);
    dispatch(fetchWorksByLabel(id)).then(() => {
      setSelectedWork(works);
    });
  }
  
//UseEffect
  useEffect(() => {
    if (labelStatus === "idle") {
      dispatch(fetchLabels());
    }
  }, [labelStatus]);


  return (
    <div className="dropdown-container  w-50 opacity-80">
      <h2 className="display-6 text-center font-custom fw-bold categories-title mx-3">
        Catégories
      </h2>
      <ul className="categorie-container ">
        {labels.map((label) => (
          <li
            key={label.id}
            onClick={() => handleLabelClick(label.id)}
            className={labelId === label.id ? "active" : ""}
          >
            {label.tag}
          </li>
        ))}
      </ul>
      {labelError && <div className="small"> Pas encore de Poèmes</div>}
    </div>
  );
}
