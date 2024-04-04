import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminEdit = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, watch } = useForm();
  const onSubmit = (data) => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex justify-center text-[13px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-9">
            <label htmlFor="">Nom utilisateur </label>
            <input
              type="text"
              className="border-2 w-[460px]  mb-5  border-indigo-950 rounded outline-none"
              placeholder=""
              {...register("username")}
            />
            <label htmlFor="">Mot de passe</label>
            <input
              type="text"
              className="border-2 w-[460px]  mb-5 border-indigo-950 rounded outline-none"
              placeholder=""
              {...register("password")}
            />

            <label htmlFor="email">Rôle</label>
            <select
              name=""
              id=""
              {...register("role")}
              className="border-2 border-indigo-950 rounded  outline-none text-[13px]"
            >
              <option value="Administrateur">Administrateur</option>
              <option value="Concepteur de modèle">Concepteur de modèle</option>
              <option value="Opérateur de compte">Opérateur de compte</option>
            </select>
            {watch("role") === "Opérateur de compte" && (
              <div className="my-2">
                <label htmlFor="">Selectionner le compte de l'operateur</label>
                <div className="my-2">
                  <select
                    name=""
                    id=""
                    className="w-full border-2 border-indigo-950 rounded  outline-none text-[13px]"
                    {...register("optionRole")}
                  >
                    <option value="Compte courant">Compte courant</option>
                    <option value="Compte epargne">Compte epargne</option>
                  </select>
                </div>
              </div>
            )}
            <button className="bg-green-500 p-2 w-1/2 rounded-xl text-white my-4">
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEdit;
