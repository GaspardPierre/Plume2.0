import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';






export default function AdminNav() {

    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center flex-wrap">
        <Link to="/admin/member" className="btn-custom">
            Gerer les membres
        </Link>
        <Link to="/admin/work" className="btn-custom">
            Gerer les oeuvres
        </Link>
        <Link to="/admin/comment" className="btn-custom">
            Gerer les commentaires
        </Link>
        <Link to="/admin/note" className="btn-custom">
            Gerer les notes
        </Link>
        </div>
      );
    }
    
  

