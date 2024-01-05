import React from "react";
import { Link } from "react-router-dom";
import ReleveCard from "./ReleveCard";

const UserActivity = () => {
  "Exemple avec deux donnees ";
  const dataUserActivity = [
    {
      description: "Compte courant",
      date: "2024-01-05",
      tauxProgression: "5",
    },
    {
      description: "Compte epargne",
      date: "2023-12-19",
      tauxProgression: "20",
    },
  ];
  return (
    <div>
      <div className="ml-6 mt-3 p-2 mx-2">
        <header className="flex justify-between mb-8 items-center">
          <h1 className="text-xl "> Tableau de bord</h1>

          <div className="flex items-center">
            <div className="mx-3 w-[50px] h-[50px] border border-indigo-950 rounded-full p-3">
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </header>
        <main>
          <h2 className="text-lg mb-4">Relevés récents</h2>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 border border-indigo-950 rounded-xl p-4 ">
            {dataUserActivity &&
              dataUserActivity.map((item) => {
                return <ReleveCard data={item} />;
              })}
          </section>
          <button className="bg-indigo-950 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl my-2">
            <Link to={"/creation"} className="text-white text-decoration-none">
              {" "}
              Créer un relevé
            </Link>
          </button>
        </main>
      </div>
    </div>
  );
};

export default UserActivity;
