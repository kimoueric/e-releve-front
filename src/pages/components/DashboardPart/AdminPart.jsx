import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Table } from "flowbite-react";
import React, { useState } from "react";
import { Modal } from "@mui/material";

const AdminPart = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex">
        <Button
          onClick={() => setOpenModal(true)}
          className=" bg-indigo-950 me-5"
        >
          Creer un profil
        </Button>
        <Button onClick={() => setOpenModal(true)} className=" bg-indigo-950">
          Creer un utilisateur
        </Button>
      </div>
      <div className="border mt-4 flex justify-between h-[400px] ">
        <div className="left  w-1/2 p-2 m-2 ">
          <h2 className="text-center">Profils</h2>
          <div className="overflow-auto h-[95%] rounded-sm border p-2">
            <div className="item  ">
              <Table>
                <Table.Head className="bg-gray-100">
                  <Table.HeadCell className="font-bold text-indigo-950">
                    Profils
                  </Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                  <Table.HeadCell className="font-bold text-indigo-950 text-end">
                    Modifier
                  </Table.HeadCell>
                  <Table.HeadCell className="font-bold text-indigo-950 text-end">
                    Supprimer
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell
                      colSpan={2}
                      className=" text-[10px] whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >
                      Admin
                    </Table.Cell>
                    <Table.Cell className=" text-end">
                      <button className="me-2 text-[12px]  ">
                        <EditIcon className="text-blue-500" />
                      </button>
                    </Table.Cell>
                    <Table.Cell className=" text-end">
                      <button className="me-2 text-[12px] text-end">
                        <DeleteIcon className="text-red-500" />
                      </button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="right  w-1/2 p-2 m-2 ">
          <h2 className="text-center">Utilisateurs</h2>
          <div className="overflow-auto h-[95%] rounded-sm border p-2">
            <div className="item  ">
              <Table>
                <Table.Head className="bg-gray-100">
                  <Table.HeadCell className="font-bold text-indigo-950">
                    Noms
                  </Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                  <Table.HeadCell className="font-bold text-indigo-950 text-end">
                    Modifier
                  </Table.HeadCell>
                  <Table.HeadCell className="font-bold text-indigo-950 text-end">
                    Supprimer
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
                    <Table.Cell
                      colSpan={2}
                      className=" text-[10px] whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >
                      KIMOU N'CHO GUY-ERIC
                    </Table.Cell>
                    <Table.Cell className=" text-end">
                      <button className="me-2 text-[12px]  ">
                        <EditIcon className="text-blue-500" />
                      </button>
                    </Table.Cell>
                    <Table.Cell className=" text-end">
                      <button className="me-2 text-[12px] text-end">
                        <DeleteIcon className="text-red-500" />
                      </button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className=" w-1/2  "
        size="lg"
        position="center"
      >
        <Modal.Header>Ajouter un nouveau profil</Modal.Header>
        <Modal.Body className="p-2">
          <div className="">
            <form>
              <div className="flex flex-col my-9">
                <label htmlFor="email">Intitule </label>
                <input
                  type="email"
                  className="border-2 w-[460px] p-3  border-indigo-950 rounded outline-none"
                  placeholder=""
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="m-2 ">
          <Button
            onClick={() => setOpenModal(false)}
            className="bg-green-500 me-3"
          >
            Ajouter
          </Button>
          <Button className="bg-red-500" onClick={() => setOpenModal(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPart;
