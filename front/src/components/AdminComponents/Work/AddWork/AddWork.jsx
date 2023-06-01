import React, { useState } from "react";
import {set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addWork } from "../../../../reducers/work";
import ConfirmModal from "../../../ConfirmModal/ConfirmModal";
import LogoutButton from "../../../Buttons/LogoutButton/LogoutButton";
import HomeButton from "../../../Buttons/HomeButton/HomeButton";


export default function AddWork() {
  const { register, handleSubmit ,setValue, reset,} = useForm();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (work) => {
    dispatch(addWork(work));
    setShowModal(true);
    reset();
  };

  const handleClose = () => setShowModal(false);


  return (
    <>

      <div className="d-flex   align-items-center justify-content-center vh-50 mt-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-100 w-md-50 ">
          <div className="mb-3 ">
            <input
              name="title"
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="form-control btn-custom"
              placeholder="titre de l'œuvre..."
            />
            {/* You might want to add error handling like in the Signin component */}
          </div>
          <div className="mb-3">
            <input
              name="author"
              id="author"
              {...register("author", { required: true })}
              className="form-control btn-custom"
              placeholder="Auteur"
            />
            {/* You might want to add error handling like in the Signin component */}
          </div>
          <div className="mb-3">
            <textarea
              name="content"
              type="text"
              id="content"
              {...register("content", { required: true })}
              className="form-control btn-custom h-100"
              placeholder="Contenu de l'œuvre..."
            />
            {/* You might want to add error handling like in the Signin component */}
          </div>
          <button type="submit" className="btn-custom submit">
            Ajouter
          </button>
        </form>
      </div>
      { showModal && <ConfirmModal onClose={handleClose} />}
    </>
  );
}
