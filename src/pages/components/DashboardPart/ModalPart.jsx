import React, { useState } from "react";

import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";

const ModalPart = ({ openModal, closeModal, btnClickedForModal }) => {
  // const [isOperator, setOperator] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
    reset();
  };
  return (
    <div>
      <Modal
        show={openModal}
        onClose={() => {
          closeModal();
          reset();
        }}
        className=""
        size="md"
        // position="center"
        // popup
      >
        <Modal.Header className=" border  border-indigo-950">
          {" "}
          {btnClickedForModal == "profilBtn"
            ? "Ajouter un nouveau profil"
            : "Ajouter un nouvel utilisateur"}
        </Modal.Header>
        <Modal.Body className="px-5 border  border-indigo-950">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {btnClickedForModal == "profilBtn" ? (
                <div className="flex flex-col ">
                  <label htmlFor="email">Intitule </label>
                  <input
                    type="email"
                    className="border-1  p-1  border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                </div>
              ) : (
                <div className="flex flex-col my-9 text-[13px]">
                  <label htmlFor="">Nom utilisateur </label>
                  <input
                    type="text"
                    className="border-2   mb-2  border-indigo-950 rounded outline-none"
                    placeholder=""
                    {...register("username")}
                  />
                  <label htmlFor="">Mot de passe</label>
                  <input
                    type="text"
                    className="border-2   mb-2 border-indigo-950 rounded outline-none"
                    placeholder=""
                    {...register("password")}
                  />

                  <label htmlFor="email">Rôle</label>
                  <select
                    name=""
                    id=""
                    {...register("role")}
                    className="border-2 border-indigo-950 rounded mb-3  outline-none text-[13px]"
                  >
                    <option value="Administrateur">Administrateur</option>
                    <option value="Concepteur de modèle">
                      Concepteur de modèle
                    </option>
                    <option value="Opérateur de compte">
                      Opérateur de compte
                    </option>
                  </select>
                  {watch("role") === "Opérateur de compte" && (
                    <div className="mt-2">
                      <label htmlFor="">
                        Selectionner le compte de l'operateur
                      </label>
                      <div className="my-2 ">
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
                </div>
              )}
              <div className="flex justify-center my-3 text-[13px]">
                <button className="bg-green-500 me-5 w-[150px] rounded-xl text-white p-2">
                  Ajouter
                </button>

                <button
                  className="bg-red-500 w-[150px] rounded-xl text-white p-2"
                  onClick={() => {
                    closeModal();
                    reset();
                  }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="m-2 flex justify-center ">
          <Button
            onClick={() => closeModal()}
            className="bg-green-500 me-5 w-[140px]"
          >
            Ajouter
          </Button>
          <Button className="bg-red-500 w-[140px]" onClick={() => closeModal()}>
            Annuler
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalPart;
