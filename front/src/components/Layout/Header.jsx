import React from 'react';
import HomeButton from '../Buttons/HomeButton/HomeButton';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';

export default function Header() {

    return (
        <>
          <header className="d-flex justify-content-around mt-3 ">
            <HomeButton />
    
            <LogoutButton />
          </header>
          </>
  )
}
