import React from "react";
import background from "../assets/bacground.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Connexion = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
//     if (data) navigate("/dashboard");

    try {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
      };

      const response = await fetch(
        `http://localhost:8080/api/utilisateur/connexion`,
        options ,

      );

      if (response.ok) {
        const userData = await response.json();
//         navigate("/dashboard", { state: { userData } })
        console.log(userData.body);
;
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <div
      className="text-xs flex py-8 background-local"
      style={{
        background: `url(${background})`,
      }}
    >
      {/* left container  */}
      <div className="w-3/4  rounded-s-xl h-[570px] w-[650px]  ms-9 py-9 flex flex-col items-center justify-center bg-white">
        <h2 className="text-center text-3xl text-bold text-indigo-950">
          Connectez-vous à votre compte.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-9">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              className={`border-2 w-[460px] p-3  border-indigo-950 rounded outline-none  ${
                errors.email ? "border-red-500" : ""
              }`}
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
          <div className="flex flex-col my-2">
            <label htmlFor="mdp">Mot de passe</label>
            <input
              type="password"
              className={`border-2 w-[460px] p-3  border-indigo-950 rounded outline-none  ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("mot_de_passe", {
                required: "Veuillez fournir un mot de passe",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-44 my-6 rounded-xl p-2 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30 "
          >
            Se connecter
          </button>
        </form>
      </div>

      {/* right container  */}

      <div className=" flex flex-col  rounded-e-xl items-center justify-center w-2/4 bg-neutral-200 w-[650px]  me-9 ">
        <h3 className="text-3xl text-indigo-950">Bienvenue</h3>

        <p className="text-[12px] w-80 text-center text-zinc-600">
          Renseignez vos coordonnées pour commencer avec nous. Dans le cas
          contraire, cliquez sur le bouton juste en bas pour créer un compte.
        </p>
        <button
          type="submit"
          className="w-44 my-6 rounded-xl p-2 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30 "
        >
          <Link to={"/inscription"} className="text-white text-decoration-none">
            S'incrire
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Connexion;
