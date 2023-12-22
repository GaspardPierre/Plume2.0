import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import work, { fetchWorks } from "../../reducers/work";
import {  fetchWorksByLabel} from "../../reducers/label";
import Loading from "../Loading/Loading";
import LabelFilter from "../LabelFilter/LabelFilter";
import ReactPaginate from 'react-paginate';
import './Poems.scss';







export default function Poems() {
  //REF FIRST WORK TITLE
  const firstWorkTitleRef = useRef(null);

  //lABELS

const labels= useSelector((state) => state.label.labels);
const labelError = useSelector((state) => state.label.error);



  //WORKS
  const dispatch = useDispatch();
  const poems = useSelector((state) => state.work.works);
  const workStatus = useSelector((state) => state.work.status);
  const error = useSelector((state) => state.work.error);
  const navigate = useNavigate();
  const [selectedWork, setSelectedWork] = useState(null);


  //PAGINATION
  const poemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPoemIndex = currentPage * poemsPerPage;
  const firstPoemIndex = lastPoemIndex - poemsPerPage;
 



  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };


  useEffect(() => {
    if (workStatus === "idle") {
      dispatch(fetchWorks());
    }

  }, [workStatus, dispatch]);



  //  handle clicking on a poem
  const handlePoemClick = (id) => {
    navigate(`/poem/${id}`);
  };
  let content;
  if (workStatus === "loading") {
    content = <Loading variant="warning" />;

  } else if (workStatus === "succeeded") {
    content = (
      <>
      
      <div className="container poems-container ">
        <div className="label-container ">
          <LabelFilter setSelectedWork={setSelectedWork}
          firstWorkTitleRef={firstWorkTitleRef}  />
          
        </div>
        <div className="poem-list">
  {selectedWork 
    && selectedWork.length >0 ? selectedWork.map((work,index) => (
        <div className="poem-title" key={work.id} onClick={() => handlePoemClick(work.id)} ref={index ===0 ? firstWorkTitleRef : null}>
          <span>{work.title}</span>
        </div>
      ))
    :  <div className="poem-title">Pas encore de Poèmes!</div>
  }
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
        className="container poems-container"
      >
        {content}
      </div>




    </>
  );
}

