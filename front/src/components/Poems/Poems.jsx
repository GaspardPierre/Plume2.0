import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import work, { fetchWorks } from "../../reducers/work";
import Loading from "../Loading/Loading";
import LabelFilter from "../LabelFilter/LabelFilter";
import ReactPaginate from 'react-paginate';
import './Poems.scss';







export default function Poems() {
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
  const currentPoems = poems.slice(firstPoemIndex, lastPoemIndex);

  const handlePageClick = (data) => {
      setCurrentPage(data.selected + 1);
  };



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
          <LabelFilter setSelectedWork={setSelectedWork} />
         
        </div>
<div className="poem-list ">
{selectedWork && selectedWork.map((work) => (
  <div className="poem-title" 
  key={work.id}
  onClick={()=>handlePoemClick(work.id)}>
<span>
{work.title}
</span>

</div>
))}
         
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
      <ReactPaginate
      className="pagination "
                    previousLabel={'précédent'}
                    nextLabel={'suivant'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(poems.length / poemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />




    </>
  );
}
