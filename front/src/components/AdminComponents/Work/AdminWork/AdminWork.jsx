import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowListWork ,setShowAddWork} from "../../../../reducers/work";
import HomeButton from "../../../Buttons/HomeButton/HomeButton";
import LogoutButton from "../../../Buttons/LogoutButton/LogoutButton";
import AddWorkButton from "../../../Buttons/AddWorkButton/AddWorkButton";
import ListButton from "../../../Buttons/ListButton/ListButton";
import ListWork from "../ListWork/ListWork";
import AddWork from "../AddWork/AddWork";

export default function AdminWork() {
  const dispatch = useDispatch();
  const showListWork = useSelector((state) => state.work.showListWork);
  const showAddWork = useSelector((state) => state.work.showAddWork);

  const handleListWorkClick = () => {
    dispatch(setShowListWork(true));
    dispatch(setShowAddWork(false));
  };
  const handleAddWorkClick = () => {
    dispatch(setShowAddWork(true));
    dispatch(setShowListWork(false));
  };



  return (
    <>
      <header className="d-flex justify-content-around mt-3 w80">
        <HomeButton />
        
        <AddWorkButton  OnShowAddWork ={handleAddWorkClick} />
        <ListButton OnGetWorkList={handleListWorkClick} />
        <LogoutButton />
      </header>
      {showListWork && <ListWork /> } 
      {showAddWork && <AddWork />} 
    </>
  );
}
