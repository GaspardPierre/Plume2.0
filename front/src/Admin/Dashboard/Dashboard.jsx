import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleRole } from '../../reducers/member';
import { WorkShow } from '../Works/WorkShow';

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
      
      <Link to="work"></Link>
      <Link to="work/create"></Link>
      <Link to="work/edit"> </Link>
      <Link to="/work/:id/show"></Link> 
      <Link to="comment"></Link>
      <Link to="comment/edit"></Link>
      <Link to="member"></Link>
      <Link to="member/create"></Link>
      <Link to="member/edit"></Link>
      <Link to="label"></Link>
      <Link to="label/create"></Link>
      <Link to="label/edit"></Link>
   
    </div>
  );
};

export default Dashboard;
