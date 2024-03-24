import React, { useState } from "react";
import ModalPart from "./ModalPart";

const AdminPart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [btnClickedForModal, setBtnClicked] = useState(null);
  const closeModal = () => {
    setOpenModal(false);
  };

  const opModal = (e) => {
    const id = e.target.id;
    setBtnClicked(id);
    setOpenModal(true);
  };
  return (
    <div>
      <div className="flex">
        {/* <button
          onClick={opModal}
          className="bg-indigo-950 me-5 p-2 rounded-xl w-56 text-white"
          id="profilBtn"
        >
          Creer un profil
        </button> */}
        <button
          onClick={opModal}
          className="bg-indigo-950 me-5 p-2 rounded-xl w-56 text-white"
          id="userBtn"
        >
          Creer un utilisateur
        </button>
      </div>
      <div className="border mt-4 flex justify-between h-[400px] ">
        {/* <div className="left  w-1/2 p-2 m-2 ">
          <h2 className="text-center">Profils</h2>
          <div className="overflow-auto h-[95%] rounded-sm border p-2">
            <div className="item  ">
              <table className="border-separate w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      className="text-indigo-950 text-[12px] text-start"
                      colSpan={2}
                    >
                      Profils
                    </th>
                    <th className="text-indigo-950  text-[12px]">Modifier</th>
                    <th className="text-indigo-950 text-[12px]">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      colSpan={2}
                      className=" text-[10px] text-start whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >
                      Admin
                    </td>
                    <td className=" text-center">
                      <button className="me-2">
                        <i className="fi fi-rr-pencil text-blue-500"></i>
                      </button>
                    </td>
                    <td className=" text-center">
                      <button className="me-2 ">
                        <i className="fi fi-rr-trash-xmark text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
        <div className="right  w-full p-2 m-2 ">
          <h2 className="text-center">Utilisateurs</h2>
          <div className=" h-[95%] rounded-sm  p-2">
            <div className="item  ">
              <table className="border-separate w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      className="text-indigo-950 text-[12px] text-start"
                      colSpan={2}
                    >
                      Noms
                    </th>
                    <th className="text-indigo-950  text-[12px]">Modifier</th>
                    <th className="text-indigo-950 text-[12px]">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      colSpan={2}
                      className=" text-[10px]  whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >
                      DJORO AKRE ROXANE MARIE AURELIE
                    </td>
                    <td className=" text-center">
                      <button className="me-2">
                        <i className="fi fi-rr-pencil text-blue-500"></i>
                      </button>
                    </td>
                    <td className=" text-center">
                      <button className="me-2 ">
                        <i className="fi fi-rr-trash-xmark text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ModalPart
        closeModal={closeModal}
        openModal={openModal}
        btnClickedForModal={btnClickedForModal}
      />
    </div>
  );
};

export default AdminPart;
