import { useQuery } from "@tanstack/react-query";
import background from "../../assets/bacground.jpeg";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChoixClient = () => {
  const navigate = useNavigate();
  const dataU = JSON.parse(sessionStorage.getItem("userData"));
  const id = dataU[0].id;

  const { data: clients } = useQuery({
    queryKey: ["dataUser"],
    queryFn: () => {
      return axios
        .get(`http://localhost:3000/donnees?id_utilisateur=${id}`)
        .then((res) => res.data[0].donneesClients);
    },
  });

  return (
    <div
      className="text-xs flex justify-center py-8 background-local "
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="w-3/4 rounded-s-xl ms-9 py-9 flex flex-col items-center justify-center bg-white shadow-2xl">
        <h2 className="text-center text-3xl text-bold text-indigo-950 mb-3">
          Selectionner les destinataires
        </h2>
      </div>
    </div>
  );
};

export default ChoixClient;
