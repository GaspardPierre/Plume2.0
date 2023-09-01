import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  ListGroup,Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { fetchWorks, deleteWork } from "../../../../reducers/work";
import "./ListWork.scss";

export default function ListWork({}) 
{
  const works = useSelector((state) => state.work.works) || [];
  const workStatus = useSelector((state) => state.work.status);
  const dispatch = useDispatch();

  // handle fetch works
  const [workDeleted, setWorkDeleted] = useState(false);
  useEffect(() => {
    if (workStatus === "idle"|| workDeleted) {
      dispatch(fetchWorks());
      setWorkDeleted(false);
    }
  }, [workStatus,workDeleted]);

  // handle delete work

  const onDeleteWork = useCallback(
    (id) => {
      dispatch(deleteWork({ id: parseInt(id) }));

      setWorkDeleted(true);
    },
    [dispatch]
  );
  return (
    <div className="d-flex  align-items-center justify-content-center v-100 mt-5 ">
      <ListGroup variant="flush">
        {works.map((work) => (
          <ListGroup.Item
            key={work.id}
            className="d-flex flex-column align-items-start px-5 w-100 w-md-50 "
          >
            <div>{work.title} </div>
            <Badge pill bg="secondary"> <div>{work.author} </div></Badge>
           
            <button
              className="btn-delete"
              onClick={() => onDeleteWork(work.id)}
            >
              <FontAwesomeIcon
                icon={faBan}
                color="rgb(224, 176, 72)"
                size="1x"
              />{" "}
              Supprimer
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
