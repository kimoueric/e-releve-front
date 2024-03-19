import { useQuery } from "@tanstack/react-query";
import background from "../../assets/bacground.jpeg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChoixClient = () => {
  const navigate = useNavigate();
  const dataU = JSON.parse(sessionStorage.getItem("userData"));
  const id = dataU[0].id;
  const [allChecked, setAllChecked] = useState(false);
  const { data: clients } = useQuery({
    queryKey: ["dataUser"],
    queryFn: () => {
      return axios
        .get(`http://localhost:3000/donnees?id_utilisateur=${id}`)
        .then((res) => res.data[0].donneesClients);
    },
  });

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  // const handleCheckedChange = (e) => {
  //   console.log(e.target.checked);
  // };
  return (
    <div
      className="text-xs flex justify-center py-8 background-local h-screen "
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="w-3/4 rounded-2xl ms-9  p-9 flex flex-col items-center  bg-white shadow-2xl">
        <h2 className="text-center text-3xl text-bold text-indigo-950 mb-3">
          Sélectionner les destinataires
        </h2>
        {/* <div className="my-2 flex ">

          <input
            type="text"
            className="border w-[250px] p-2 border border-gray-300 rounded-xl outline-none"
          />
          <div className="flex items-center justify-between ms-5">
            <span className="mx-5"> Sélectionner tout</span>
            <input
              type="checkbox"
              name="allSelected"
              id="allSelected"
              className="outline-none"
              // onChange={handleCheckedChange}
            />
          </div>
        </div> */}
        <div className="w-full h-full flex justify-start flex-col border border-gray-300 rounded-xl p-2 items-center overflow-auto h-[200px]">
          {clients &&
            clients.map((element, index) => {
              return (
                <div className=" w-full " key={index}>
                  <label className="flex items-center justify-between  m-2 p-2 border rounded-sm">
                    <span>{element.fullName}</span>
                    <input
                      type="checkbox"
                      name={`${element.fullName}`}
                      className="outline-none"
                    />
                  </label>
                </div>
              );
            })}
        </div>
        <button
          className="bg-indigo-950 p-3 w-48 text-white rounded-xl my-2 float-end "
          onClick={goToDashboard}
        >
          Créer
        </button>
      </div>
    </div>
  );
};

export default ChoixClient;
