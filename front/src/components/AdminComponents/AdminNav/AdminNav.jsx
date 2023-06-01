import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';

import AdminWork from '../Work/AdminWork/AdminWork';
import { setShowAdminWork } from '../../../reducers/work';

export default function AdminNav() {
const dispatch = useDispatch();
// const showListWork = useSelector((state) => state.work.showListWork);
const showAdminWork = useSelector((state) => state.work.showAdminWork);
// const handleListWorkClick = () => {
//   dispatch(setShowListWork(true));
// };
const handleAdminWorkClick = () => {
  dispatch(setShowAdminWork(true));
};

  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center flex-wrap">
      <Link to="/admin/member" className="btn-custom">
        Membres
      </Link>
      <Link to="/admin/work" className="btn-custom" onClick={handleAdminWorkClick}>
        Oeuvres
      </Link>
      <Link to="/admin/comment" className="btn-custom">
        Commentaires
      </Link>
      <Link to="/admin/note" className="btn-custom">
        Notes
      </Link>

      {showAdminWork && <AdminWork />} 
     
    </div>
  );
}

