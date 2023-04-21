import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Signin.scss";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const { ref, ...rest} = register("pseudo", { required: true });
 

  return (
    <>
      <h1 className="text-center">Inscription</h1>
      <div className="d-flex  align-items-start justify-content-center vh-100 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-100 ">
          <div className="mb-3 ">
            <input {...rest}
            name="pseudo"
              type="text"
              id="pseudo"
             { ...register("pseudo", { required: true }) }
              className="form-control btn-custom"
              placeholder="Pseudo"
             
             
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
            />
            {errors.email && (
              <p className="error">
                L'adresse email est requise et doit être valide.
              </p>
            )}
          </div>

          <div className="mb-3 ">
            <input
            name="mdp"
              type="password"
              id="mdp"
              {...register("mdp", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*\d).{8,}$/,
              })}
              className="form-control btn-custom"
              placeholder="Mot de passe"
            />
            {errors.mdp && errors.mdp.type === "required" && (
              <p className="error">Le mot de passe est requis.</p>
            )}
            {errors.mdp && errors.mdp.type === "minLength" && (
              <p className="error">
                Le mot de passe doit contenir au moins 8 caractères.
              </p>
            )}
            {errors.mdp && errors.mdp.type === "pattern" && (
              <p className="error">
                Le mot de passe doit contenir au moins 8 caractères et au moins
                un chiffre.
              </p>
            )}
          </div>

          <div className="mb-3">
            <input
            name="confmdp"
              type="password"
              id="confmdp"
              {...register("confmdp", {
                required: true,
                validate: (value) =>
                  value === document.getElementById("mdp").value,
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
