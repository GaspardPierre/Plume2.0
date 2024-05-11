import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from "../../reducers/member";
import "./Login.scss";

export default function Login() {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value.toLowerCase());
  };

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(login(data));
      const user = unwrapResult(resultAction);
      const role = user.role
    
      if(role=== 'admin') { 
      navigate("/admin"); }else{
        navigate("/");
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(error.message || "Erreur d'email ou de mot de passe");
      reset();  
    }
  };
  

  return (
    <>
    

  
     

      <div className="d-flex  align-items-center w-100  ">
       
       <form onSubmit={handleSubmit(onSubmit)} className="w-100 text-center  ">
       
        <div className=" py-1">
            <input
              name="email"
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              className="form-control text-center mx-auto border-top-0 border-end-0 border-start-0 border-bottom-1 md-font line "
              placeholder="Email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="error">
                L'adresse email est requise et doit être valide.
              </p>
            )}
          </div>

          <div className="my-5 ">
            <input
              name="password"
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*\d).{8,}$/,
              })}
              className="form-control text-center mx-auto border-top-0 border-end-0 border-start-0 border-bottom-1 md-font line "
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

     

          <button type="submit" className="btn btn-submit rounded bg-third color-second font-custom ">
            Envoyer
          </button>
        </form>
      </div>
    
    </>
  );
}
