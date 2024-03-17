import { useQuery } from "@tanstack/react-query";
import background from "../../assets/bacground.jpeg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChoixClient = () => {
  const navigate = useNavigate();
  const dataU = JSON.parse(sessionStorage.getItem("userData"));
  const id = dataU[0].id;
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [clientChecklist, setClientChecklist] = useState([]);

  const { data: clients } = useQuery({
    queryKey: ["dataUser"],
    queryFn: () => {
      return axios
        .get(`http://localhost:3000/donnees?id_utilisateur=${id}`)
        .then((res) => res.data[0].donneesClients);
    },
  });

  useEffect(() => {
    if (selectAllChecked) {
      const allClientNames = clients.map((client) => client.fullName);
      setClientChecklist(allClientNames);
    } else {
      setClientChecklist([]);
    }
  }, [selectAllChecked, clients]);

  const handleSelectAllChange = (e) => {
    const { checked } = e.target;
    setSelectAllChecked(checked);
  };

  const handleClientCheckboxChange = (element) => {
    if (clientChecklist.includes(element.fullName)) {
      const updatedChecklist = clientChecklist.filter(
        (name) => name !== element.fullName
      );
      setClientChecklist(updatedChecklist);
    } else {
      setClientChecklist([...clientChecklist, element.fullName]);
    }
    const allChecked = clients.every((client) =>
      clientChecklist.find((c) => c.fullName === client.fullName)
    );
    setSelectAllChecked(allChecked);
  };
  return (
    <div
      className="text-xs flex justify-center py-8 background-local h-screen "
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="w-3/4 rounded-s-xl ms-9  p-9 flex flex-col items-center  bg-white shadow-2xl">
        <h2 className="text-center text-3xl text-bold text-indigo-950 mb-3">
          Sélectionner les destinataires
        </h2>
        <div className="my-2 flex ">
          <input
            type="text"
            className="border w-[250px] p-2 border-indigo-950 rounded-xl outline-none"
          />
          <div className="flex items-center justify-between ms-5">
            <span className="mx-5"> Sélectionner tout</span>
            <input
              type="checkbox"
              name="allSelected"
              id="allSelected"
              checked={selectAllChecked}
              onChange={handleSelectAllChange}
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-start flex-col border items-center overflow-auto h-[200px]">
          {clients &&
            clients.map((element, index) => {
              return (
                <div className=" w-full " key={index}>
                  <label className="flex items-center justify-between  m-2 p-2 border rounded-sm">
                    <span>{element.fullName}</span>
                    <input
                      type="checkbox"
                      name={`${element.fullName}`}
                      checked={clientChecklist.includes(element.fullName)}
                      onChange={() => handleClientCheckboxChange(element)}
                    />
                  </label>
                </div>
              );
            })}
        </div>
        <button className="bg-indigo-950 p-3 w-48 text-white rounded-xl my-2 float-end ">
          Créer
        </button>
      </div>
    </div>
  );
};

export default ChoixClient;
