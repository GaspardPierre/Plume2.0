import React from 'react'
import { useLocation } from 'react-router-dom'
import './Title.scss'

export default function Title() {

    const location = useLocation();
    const path = location.pathname;

    const currentTitle = (path) => {
        switch (path) {
         
            case '/login':
                return 'Connexion'
            case '/signin':
                return 'Inscription'
            case '/poems':
                return 'Poèmes'
            case '/poem/{id}':
                return 'Poème'
                case '/about':
                    return 'A propos'
                    default:
                        if (path.startsWith('/poem/')) {
                            return 'Poème';
                        }
                        return 'Accueil';
                }
        }
    

    const title = currentTitle(path);

  return (


<h1
 className=' font-title text-center font-custom fw-bold mt-1 color-four line border-title' >
    {title}</h1>
 


       

  )
}
