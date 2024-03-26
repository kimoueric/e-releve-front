import React from "react";
import { useForm } from "react-hook-form";
const OtherConfig = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div>
        {/* infos  */}
        <div className="flex  items-start flex-col justify-center  translate-x-[250px]">
          <h5 className="text-2xl  text-indigo-950">CONFIGURATION DU COMPTE</h5>
        </div>
      </div>
      {/* body  */}
      <div className="flex  justify-center ">
        <div className="w-[60%]">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="shadow-2xl  p-5  rounded-xl text-xs flex items-center  justify-between bg-white my-2"
          >
            {" "}
            {/* left container  */}
            <div className="mx-9 w-full">
              <div className="flex flex-col my-2">
                <label htmlFor="fullname">Nom d'utilisateur</label>
                <input
                  type="text"
                  className="border-2 text-[11px] border-indigo-950 rounded outline-none"
                  {...register("fullname", {
                    required: true,
                    value: ` ${userData[0].name} ${userData[0].last_name} `,
                  })}
                />
              </div>

              {/* <div className="flex flex-col my-2">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  className="border-2  text-[11px] border-indigo-950 rounded outline-none"
                  {...register("email", {
                    required: true,
                    value: ` ${userData[0].email} `,
                  })}
                />
              </div> */}
              <div className="flex flex-col my-2">
                <label htmlFor="mdp">Mot de passe</label>
                <input
                  type="text"
                  className="border-2 border-indigo-950 text-[12px] rounded outline-none"
                  {...register("password", {
                    required: true,
                    value: ` ${userData[0].mdp} `,
                  })}
                />
              </div>

              {/* <div className="flex flex-col my-2">
                <label htmlFor="nomOrg">Nom de l'organisation</label>
                <input
                  type="text"
                  className="border-2 text-[11px] border-indigo-950 rounded outline-none"
                  disabled
                  {...register("organisationName", {
                    required: true,
                    value: ` ${userData[0].nom_organisation} `,
                  })}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="adresse">Siege de l'organisation</label>
                <input
                  type="text"
                  className="border-2 text-[11px] border-indigo-950 rounded outline-none"
                  disabled
                  {...register("adress", {
                    required: true,
                    value: ` ${userData[0].adresse_entreprise} `,
                  })}
                />
              </div> */}

              <div className="flex flex-col my-2">
                <label>Logo de l'organisation</label>
                <div className="w-[60px] h-[60px]  my-3 ">
                  <img src={`${userData[0].logo_url}`} alt="logo" />
                </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtherConfig;
