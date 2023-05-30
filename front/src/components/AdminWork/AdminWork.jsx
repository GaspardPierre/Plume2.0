import React from 'react';
import HomeButton from "../Buttons/HomeButton/HomeButton";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";  
import AddWorkButton from '../Buttons/AddWorkButton/AddWorkButton';



export default function AdminWork() {
  return (
    <>
          <header className="d-flex justify-content-around mt-3 w80">
        <HomeButton />
        <LogoutButton />
        <AddWorkButton />
        </header>
    </>
  )
}
