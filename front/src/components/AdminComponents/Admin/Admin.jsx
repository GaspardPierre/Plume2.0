import React from 'react';
import AdminNav from '../AdminNav/AdminNav';

export default function Admin() {
  return (    <>
    <title>Plume 2.0 - Admin</title>
    <meta
      name="description"
      content="Bienvenue sur Plume 2.0 - la plateforme de partage de poèmes et de nouvelles en ligne"
    />
    <meta
      name="keywords"
      content="plume, poèmes, nouvelles, partage, écriture"
    />

   
      <header className="header-container container mb-8">
        <div className="row">
          <h1 className="text-center mb-2">Plume 2.0</h1>
        </div>
      </header>

      <div className="home__main__container d-flex align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
       <AdminNav />
          </div>
        </div>
      </div>
   
  </>
    )
   
}
