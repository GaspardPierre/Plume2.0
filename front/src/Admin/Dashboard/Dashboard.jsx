import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleRole } from '../../reducers/member';



const Dashboard = () => {
  const dispatch = useDispatch();
  
  return (
  <div>
    <div className='d-flex justify-content-start flex-column '>

    <h1 className='text-center my-3'>Tableau de bord</h1>
    <button
        className='rounded' onClick={() => dispatch(toggleRole())}>
        Plume 2.0
      </button>
   
      </div>
      
      <Link to="admin/work"></Link>
      <Link to="admin/work/create"></Link>
      <Link to="admin/work/edit"> </Link>
      <Link to="admin/work/:id/show"></Link> 
      <Link to="admin/comment"></Link>
      <Link to="admin/comment/edit"></Link>
      <Link to="admin/member"></Link>
      <Link to="admin/member/create"></Link>
      <Link to="admin/member/edit"></Link>
      <Link to="admin/label"></Link>
      <Link to="admin/label/create"></Link>
      <Link to="admin/label/edit"></Link>
   
    </div>
  );
};

export default Dashboard;
