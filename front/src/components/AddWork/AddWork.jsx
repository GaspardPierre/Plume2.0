import React, { useState } from "react";
import {set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addWork } from "../../reducers/work";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import HomeButton from "../Buttons/HomeButton/HomeButton";


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
    <header className="d-flex justify-content-around mt-3 w80">
        <HomeButton />

        <LogoutButton />
        </header>
      <h1 className="text-center mb-8">Ajouter une œuvre</h1>
      <div className="d-flex  align-items-start justify-content-center vh-50 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 ">
          <div className="mb-3 ">
            <input
              name="title"
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="form-control btn-custom"
              placeholder="Entrez le titre de l'œuvre ici..."
            />
            {/* You might want to add error handling like in the Signin component */}
          </div>
          <div className="mb-3">
            <input
              name="author"
              id="author"
              {...register("author", { required: true })}
              className="form-control btn-custom"
              placeholder="Entrez le nom de l'auteur"
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
              placeholder="Entrez le contenu de l'œuvre ici..."
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
