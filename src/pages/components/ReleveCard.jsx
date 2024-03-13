import React from "react";

const ReleveCard = ({ data }) => {
  return (
    <div className="bg-gray-200 shadow rounded-lg p-4">
      <div className="mb-2">
        <h3 className="text-xl ">{data.description && data.description}</h3>
      </div>
      <div>
        <p className="text-sm mb-2">Date: {data.date && data.date}</p>
        <div className="w-full h-2 bg-gray-400 rounded-full mb-2">
          <div
            className="h-full bg-indigo-950 rounded-full"
            style={{
              width: `${data.taux_envoi}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-500 mb-2">
          {data.taux_envoi && data.taux_envoi}% de releves envoye
        </p>
        {/* <button className="bg-indigo-950 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded-2xl">
          Voir details du relevé
        </button> */}
      </div>
    </div>
  );
};

export default ReleveCard;
