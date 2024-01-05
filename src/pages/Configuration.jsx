import React from "react";
import background from "../assets/bacground.jpeg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Configuration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) navigate("/dashboard");
  };
  return (
    <div
      className="overflow-hidden backgroung-local"
      style={{
        background: `url(${background})`,
      }}
    >
      {/* header  */}
      <div className="m-5">
        {/* infos  */}
        <div className="flex  items-start flex-col justify-center  translate-x-[250px]">
          <h5 className="text-2xl  text-indigo-950">CONFIGURATION DU COMPTE</h5>
          <p className="text-[12px] text-center text-zinc-600">
            modifier votre nom , avatar , etc.
          </p>
        </div>
      </div>
      {/* body  */}
      <div className="flex  justify-center">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="shadow-2xl  p-5  rounded-xl text-xs flex items-center  justify-between bg-white my-2"
          >
            {" "}
            {/* left container  */}
            <div className="mx-9">
              <div className="flex flex-col my-2">
                <label htmlFor="fullname">Nom complet</label>
                <input
                  type="text"
                  className="border-2 w-80 p-3 border-indigo-950 rounded outline-none"
                  {...register("fullname", { required: true })}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  className="border-2 w-80 p-3   border-indigo-950 rounded outline-none"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="mdp">Mot de passe</label>
                <input
                  type="password"
                  className="border-2 w-80 p-3 border-indigo-950 rounded outline-none"
                  {...register("password", { required: true })}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="nomOrg">Nom de l'organisation</label>
                <input
                  type="text"
                  className="border-2 w-80 p-3 border-indigo-950 rounded outline-none"
                  {...register("organisationName", { required: true })}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="adresse">Adresse de l'organisation</label>
                <input
                  type="text"
                  className="border-2 w-80 p-3 border-indigo-950 rounded outline-none"
                  {...register("adress", { required: true })}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="adresse">Logo de l'organisation</label>
                <div className="w-[50px] h-[50px] border my-3 border-xl border-indigo-950">
                  <img src="" alt="" />
                </div>
                <input
                  type="file"
                  className="border-2 w-80 p-3 border-indigo-950 rounded outline-none"
                  {...register("logo")}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-32 my-3 rounded-full p-3 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30 "
                >
                  Enregistrer
                </button>
              </div>
            </div>
            {/* right container  */}
            <div>
              <div className="w-96 h-96 border border-2xl rounded-full  border-indigo-950"></div>
              <div className="flex justify-center items-center  ">
                <label
                  htmlFor="avatar"
                  className="w-32 bg-indigo-950 text-center p-3 text-white my-3  rounded-full"
                >
                  Modifier
                </label>
                <input
                  type="file"
                  id="avatar"
                  className="hidden"
                  {...register("avatar")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
