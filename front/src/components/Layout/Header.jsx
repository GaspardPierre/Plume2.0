import React from 'react';
import HomeButton from '../Buttons/HomeButton/HomeButton';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';

export default function Header() {

    return (
        <>
          <header className="border-bottom border-2  d-flex justify-content-around mt-3 p-4 ">
            <HomeButton />
    
            <LogoutButton />
          </header>
          </>
  )
}
