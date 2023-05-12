import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addMember } from "../../reducers/member";
import "./Signin.scss";


export default function Signin() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const onSubmit = async (data) => {
    try { 
    await dispatch(addMember(data));   
         // Redirect <Login />
         navigate("/login");

    } catch (error) {
      console.error("Erreur lors de l'ajout d'un membre", error);
    }
  };


  // Transform  input to lowercase 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value.toLowerCase());
  };
  

  return (
    <>
      <h1 className="text-center mb-8">Inscription</h1>
      <div className="d-flex  align-items-start justify-content-center vh-50 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 ">
          <div className="mb-3 ">
            <input
            
              name="pseudo"
              type="text"
              id="pseudo"
              {...register("pseudo", { required: true })}
              className="form-control btn-custom"
              placeholder="Pseudo"
              onChange={handleInputChange}
            />
            {errors.pseudo && <p className="error">Le pseudo est requis.</p>}
          </div>

          <div className="mb-3">
            <input
              name="email"
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              className="form-control btn-custom"
              placeholder="Email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="error">
                L'adresse email est requise et doit être valide.
              </p>
            )}
          </div>

          <div className="mb-3 ">
            <input
              name="password"
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*\d).{8,}$/,
              })}
              className="form-control btn-custom"
              placeholder="Mot de passe"
           
            />
            {errors.password && errors.password.type === "required" && (
              <p className="error">Le mot de passe est requis.</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="error">
                Le mot de passe doit contenir au moins 8 caractères.
              </p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p className="error">
                Le mot de passe doit contenir au moins 8 caractères et au moins
                un chiffre.
              </p>
            )}
          </div>
          <div className="mb-3">
            <input
              name="confirmpassword"
              type="password"
              id="confmdp"
              {...register("password", {
                required: true,
                validate: (value) =>
                  value === document.getElementById("password").value,
              })}
              className="form-control btn-custom"
              placeholder="Confirmation du mot de passe"
            />
            {errors.confmdp && errors.confmdp.type === "required" && (
              <p className="error">
                La confirmation du mot de passe est requise.
              </p>
            )}
            {errors.confmdp && errors.confmdp.type === "validate" && (
              <p className="error">
                Les mots de passe doivent être identiques.
              </p>
            )}
          </div>

          <button type="submit" className="btn-custom submit ">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
