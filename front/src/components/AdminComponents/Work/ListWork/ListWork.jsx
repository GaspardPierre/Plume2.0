import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { fetchWorks, deleteWork } from "../../../../reducers/work";
import "./ListWork.scss";


export default function ListWork({  }) {
  const works = useSelector((state) => state.work.works) || [];
  const workStatus = useSelector((state) => state.work.status);
  const dispatch = useDispatch();
  // handle fetch works
  useEffect(() => {
    if (workStatus === "idle") {
      dispatch(fetchWorks())
      setWorkDeleted(false);
    }
  }, [workStatus, dispatch]);

  // handle delete work
  const [workDeleted, setWorkDeleted] = useState(false);
  const onDeleteWork = useCallback(
    (id) => {
    dispatch(deleteWork({ id }));
    setWorkDeleted(true);
  },
    [dispatch]
  );
  return (
    <div className="d-flex  align-items-center justify-content-center v-100 mt-5 ">


   
      <ListGroup>
        {works.map((work) => (
          <ListGroup.Item key={work.id}  className="d-flex flex-column align-items-start px-5 w-100 w-md-50 ">
            <div>{work.title}  </div>
            <div>{work.author} </div>
            <button
            className="btn-delete"
            onClick={() => onDeleteWork(work.id)}>
            <FontAwesomeIcon icon={faBan} color="rgb(224, 176, 72)" size="1x" /> Supprimer
          </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
     
    </div>
  );
}
