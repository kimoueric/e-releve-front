import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReleveCard from "./ReleveCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserActivity = () => {
  const [userData, setUserData] = useState();

  const { data: stories } = useQuery({
    queryKey: ["stories"],
    queryFn: () => {
      return axios
        .get(
          `http://localhost:3000/historiques?id_utilisateur=${userData[0].id}`
        )
        .then((res) => res.data[0].operations);
    },
  });

  useEffect(() => {
    const recupuserData = JSON.parse(sessionStorage.getItem("userData"));
    setUserData(recupuserData);
  }, []);
  return (
    <div>
      <div className="ml-6 mt-3 p-2 mx-2">
        <header className="flex justify-between mb-8 items-center">
          <h1 className="text-xl "> Tableau de bord</h1>

          <div className="flex items-center">
            <div className="mx-3 w-[50px] h-[50px] ">
              {userData ? (
                <img
                  src={`${userData[0].photo_url}`}
                  alt="photo"
                  className=" rounded-3xl border"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </header>
        <main>
          <h2 className="text-lg mb-4">Relevés récents</h2>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 border border-indigo-950 rounded-xl p-4 ">
            {stories &&
              stories.map((story, index) => {
                return <ReleveCard data={story} key={index} />;
              })}
          </section>
          <button className="bg-indigo-950 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl my-2">
            <Link to={"/creation"} className="text-white text-decoration-none">
              Créer un relevé
            </Link>
          </button>
        </main>
      </div>
    </div>
  );
};

export default UserActivity;
