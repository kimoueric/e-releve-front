import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import background from "../assets/bacground.jpeg";

const Inscription = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const validatePasswordMatch = (value) => {
    const password = getValues("password");
    return password === value || "Les mots de passe ne correspondent pas";
  };

  const onSubmit = (data) => {
    if (data) navigate("/connexion");
    console.log(data);
  };

  return (
    <div
      className="text-xs flex flex-col justify-center items-center background-local"
      style={{ background: `url(${background})` }}
    >
      {/* formulaire */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg shadow-gray-250 p-5 w-[550px] rounded-xl flex items-center flex-col bg-white my-2"
      >
        <div>
          <h5 className="text-2xl text-center text-indigo-950">INSCRIPTION</h5>
        </div>

        <div
          className={`flex flex-col my-2 ${errors.fullname ? "has-error" : ""}`}
        >
          <label htmlFor="fullname">Nom complet</label>
          <input
            type="text"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.fullname ? "border-red-500" : ""
            }`}
            id="fullname"
            {...register("fullname", {
              required: "Veuillez renseigner le champ",
            })}
            placeholder="Ex : mon nom complet"
          />
          {errors.fullname && (
            <p className="text-red-500">{errors.fullname.message}</p>
          )}
        </div>

        <div
          className={`flex flex-col my-2 ${errors.email ? "has-error" : ""}`}
        >
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            id="email"
            {...register("email", {
              required: "Veuillez fournir une adresse e-mail.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Veuillez fournir une adresse e-mail valide.",
              },
            })}
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div
          className={`flex flex-col my-2 ${errors.password ? "has-error" : ""}`}
        >
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.password ? "border-red-500" : ""
            }`}
            id="mdp"
            {...register("password", {
              required: "Renseigner un mot de passe d'au moins 5 caractères",
              minLength: {
                value: 5,
                message: "Le mot de passe doit avoir au moins 5 caractères",
              },
            })}
            placeholder="Enter votre mot de passe"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className={`flex flex-col my-2 ${errors.rmdp ? "has-error" : ""}`}>
          <label htmlFor="rmdp">Retaper le mot de passe</label>
          <input
            type="password"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.rmdp ? "border-red-500" : ""
            }`}
            id="rmdp"
            {...register("rmdp", {
              required: true,
              validate: validatePasswordMatch,
            })}
          />
          {errors.rmdp && (
            <span className="text-red-500 text-sm">{errors.rmdp.message}</span>
          )}
        </div>

        <div
          className={`flex flex-col my-2 ${errors.nomOrg ? "has-error" : ""}`}
        >
          <label htmlFor="nomOrg">Nom de l'organisation</label>
          <input
            type="text"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.orgnisationName ? "border-red-500" : ""
            }`}
            id="orgnisationName"
            placeholder="Ex : mon organisation"
            {...register("orgnisationName", {
              required: "Veuillez renseigner le nom de l'organisation",
            })}
          />
          {errors.orgnisationName && (
            <span className="text-red-500 text-sm">
              {errors.orgnisationName.message}
            </span>
          )}
        </div>

        <div
          className={`flex flex-col my-2 ${
            errors.adressOrg ? "has-error" : ""
          }`}
        >
          <label htmlFor="adresse">Adresse de l'organisation</label>
          <input
            type="text"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.adressOrg ? "border-red-500" : ""
            }`}
            id="adresse"
            placeholder="Ex : ville"
            {...register("adressOrg", {
              required: "Veuillez renseigner l'adresse de l'organisation",
            })}
          />
          {errors.adressOrg && (
            <span className="text-red-500 text-sm">
              {errors.adressOrg.message}
            </span>
          )}
        </div>

        <div
          className={`flex flex-col my-2 ${errors.typeOrg ? "has-error" : ""}`}
        >
          <label htmlFor="typeOrg">Type d'organisation</label>
          <select
            id="typeOrg"
            className={`border-2 w-80 p-2 border-indigo-950 rounded outline-none ${
              errors.typeOrg ? "border-red-500" : ""
            }`}
            {...register("organisationType", { required: true })}
          >
            <option value="banque">banque</option>
            <option value="assurance">assurance</option>
            <option value="finance">finance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-44 my-3 rounded-2xl p-2 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30"
        >
          S'inscrire
        </button>

        <h6>
          Avez-vous déjà un compte ?
          <Link to={"/connexion"} className="text-decoration-none">
            <span className="text-indigo-500"> connectez-vous.</span>
          </Link>
        </h6>
      </form>
    </div>
  );
};

export default Inscription;
