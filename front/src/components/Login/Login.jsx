import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/member";
import "./Login.scss";


export default function Login() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // State errorMessage

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value.toLowerCase());
  };
  
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(login(data));
      console.log(`response.payload.role: ${JSON.stringify(response.payload)}`);

      // Vérifier si le rôle existe
      if (response.payload && response.payload.role) {
        navigate("/");
      } else {
        setErrorMessage("Erreur d'email ou de mot de passe");
        reset();
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  

  return (
    <>
    

  
      <h1 className="text-center mb-5">Connexion</h1>
   
      <div className="d-flex  align-items-center justify-content-center vh-80 ">

        <form onSubmit={handleSubmit(onSubmit)} className="w-100 mb-5 ">
          <div className="mb-3">
            <input
              name="email"
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              className="form-control "
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
              className="form-control "
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
              className="form-control "
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
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>

          <button type="submit" className="submit ">
            Envoyer
          </button>
        </form>
      </div>
    
    </>
  );
}
