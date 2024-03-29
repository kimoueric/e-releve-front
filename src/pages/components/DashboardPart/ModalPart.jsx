import React from "react";
import { Button, Modal } from "flowbite-react";

const ModalPart = ({ openModal, closeModal, btnClickedForModal }) => {
  return (
    <div>
      <Modal
        show={openModal}
        onClose={() => closeModal()}
        className="w-1/2 "
        size="md"
        position="bottom"
      >
        <Modal.Header>
          {" "}
          {btnClickedForModal == "profilBtn"
            ? "Ajouter un nouveau profil"
            : "Ajouter un nouvel utilisateur"}
        </Modal.Header>
        <Modal.Body className="p-2 flex justify-center">
          <div className="">
            <form>
              {btnClickedForModal == "profilBtn" ? (
                <div className="flex flex-col my-9">
                  <label htmlFor="email">Intitule </label>
                  <input
                    type="email"
                    className="border-2 w-[460px] p-3  border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                </div>
              ) : (
                <div className="flex flex-col my-9">
                  <label htmlFor="">Nom utilisateur </label>
                  <input
                    type="text"
                    className="border-2 w-[460px] p-3 mb-5  border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                  <label htmlFor="">Mot de passe</label>
                  <input
                    type="text"
                    className="border-2 w-[460px] p-3 mb-5 border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                  <label htmlFor="email">Role</label>
                  <select name="" id="">
                    <option value="">Administrateur</option>
                    <option value="">Model designer</option>
                    <option value="">Operateur de compte</option>
                  </select>
                </div>
              )}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="m-2 flex justify-center ">
          <Button
            onClick={() => closeModal()}
            className="bg-green-500 me-5 w-[140px]"
          >
            Ajouter
          </Button>
          <Button className="bg-red-500 w-[140px]" onClick={() => closeModal()}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPart;
