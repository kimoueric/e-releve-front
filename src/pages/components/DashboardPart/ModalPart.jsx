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
                    className="border-2 w-[460px] p-3  border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="border-2 w-[460px] p-3  border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                  <label htmlFor="email">Profil</label>
                  <input
                    type="text"
                    className="border-2 w-[460px] p-3  border-indigo-950 rounded outline-none"
                    placeholder=""
                  />
                </div>
              )}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="m-2 flex justify-center">
          <Button onClick={() => closeModal()} className="bg-green-500 me-3">
            Ajouter
          </Button>
          <Button className="bg-red-500" onClick={() => closeModal()}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPart;
