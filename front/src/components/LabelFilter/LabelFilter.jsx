import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLabels, fetchWorksByLabel } from "../../reducers/label";
import "./LabelFilter.scss";

export default function LabelFilter({ setSelectedWork, scrollToPoemsContainer }) {
  const dispatch = useDispatch();
  // selectors
  const labels = useSelector((state) => state.label.labels);
  const labelStatus = useSelector((state) => state.label.status);
  const works = useSelector((state) => state.label.works);

  // handle label id
  const [labelId, setLabelId] = useState(null);

 
  const handleLabelClick = async (id) => {
    setLabelId(id);
   dispatch(fetchWorksByLabel(id));
    scrollToPoemsContainer();
  };

  // update works when they change
  useEffect(() => {
    if (works.length > 0) {
      setSelectedWork(works);
    } else {
      setSelectedWork([]);
    }
  }, [works, setSelectedWork]);

  // Get labels
  useEffect(() => {
    if (labelStatus === "idle") {
      dispatch(fetchLabels());
    }
  }, [labelStatus, dispatch]);

    return (
      <div className="dropdown-container w-50 opacity-80">
        <h2 className="display-6 text-center font-custom fw-bold categories-title mx-3">
          Catégories
        </h2>
        <ul className="categorie-container">
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
      </div>
    );
  }