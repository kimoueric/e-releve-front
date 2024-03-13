import background from "../assets/bacground.jpeg";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreationReleve = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("modeleId", data.modele);
    if (data) navigate("/releve");
  };

  return (
    <div
      className="text-xs flex justify-center py-8 backgroung-local"
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="w-3/4 rounded-s-xl ms-9 py-9 flex flex-col items-center justify-center bg-white shadow-2xl">
        <h2 className="text-center text-3xl text-bold text-indigo-950 mb-3">
          Créer un relevé
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Choisir le modèle de relevé</label>
            <div className="flex">
              <div className="flex flex-col my-2 mx-2">
                <input
                  type="radio"
                  className={`peer hidden radio-input ${
                    errors.modele && "border-red-500"
                  }`}
                  id="modele1"
                  value="1"
                  name="modele"
                  {...register("modele", { required: true })}
                />
                <label
                  className={`w-[50px] h-[50px] border my-3 border-2xl border-indigo-950 peer-checked:border-indigo-500`}
                  htmlFor="modele1"
                ></label>
              </div>

              <div className="flex flex-col my-2 mx-2">
                <input
                  type="radio"
                  className={`peer hidden radio-input ${
                    errors.modele && "border-red-500"
                  }`}
                  id="modele2"
                  value="2"
                  name="modele"
                  {...register("modele", { required: true })}
                />
                <label
                  className={`w-[50px] h-[50px] border my-3 border-2xl border-indigo-950 peer-checked:border-indigo-500`}
                  htmlFor="modele2"
                ></label>
              </div>

              <div className="flex flex-col my-2 mx-2">
                <input
                  type="radio"
                  className={`peer hidden radio-input ${
                    errors.modele && "border-red-500"
                  }`}
                  id="modele3"
                  value="3"
                  name="modele"
                  {...register("modele", { required: true })}
                />
                <label
                  className={`w-[50px] h-[50px] border my-3 border-2xl border-indigo-950 peer-checked:border-indigo-500`}
                  htmlFor="modele3"
                ></label>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col my-2 ${errors.intitule && "has-error"}`}
          >
            <label htmlFor="intitule">Intitulé du relevé</label>
            <input
              type="text"
              className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                errors.intitule ? "border-red-500" : ""
              }`}
              {...register("intitule", { required: true })}
            />
          </div>

          <div className={`flex flex-col my-2 ${errors.format && "has-error"}`}>
            <label htmlFor="frequence">
              Choisir le type de produit ou service{" "}
            </label>
            <select
              name="product"
              className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                errors.format ? "border-red-500" : ""
              }`}
            >
              {/* <option value="pdf">courant</option> */}
            </select>
          </div>
          <div className={`flex flex-col my-2 ${errors.date && "has-error"}`}>
            <label htmlFor="frequence">Choisir la fréquence d'envoi</label>
            <input
              type="datetime-local"
              className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                errors.date ? "border-red-500" : ""
              }`}
              {...register("date", { required: true })}
            />
          </div>

          <div className={`flex flex-col my-2 ${errors.format && "has-error"}`}>
            <label htmlFor="frequence">Choisir le format d'envoi</label>
            <select
              name="format"
              className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                errors.format ? "border-red-500" : ""
              }`}
            >
              <option value="pdf">PDF</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-44 my-6 rounded-xl p-3 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30"
          >
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreationReleve;
