import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import ReleveCard from "./ReleveCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AdminUser from "./DashboardPart/AdminPart";
import IndexDashPart from "./DashboardPart/IndexDashPart";

const UserActivity = () => {
  const userRole = useOutletContext();
  const [userData, setUserData] = useState(null);

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

  const roleAndData = {
    role: userRole,
    data: stories,
  };

  useEffect(() => {
    const recupuserData = JSON.parse(sessionStorage.getItem("userData"));
    setUserData(recupuserData);
  }, []);
  return (
    <div>
      <div className="ml-6 mt-3 p-2 mx-2">
        <header className="flex justify-between mb-8 items-center">
          {/* <h1 className="text-xl "> Tableau de bord</h1> */}

          <div className="flex items-center">
            {/* <div className="mx-3 w-[50px] h-[50px] ">
              {userData ? (
                <img
                  src={`${userData[0].photo_url}`}
                  alt="photo"
                  className=" rounded-3xl border"
                />
              ) : (
                ""
              )}
            </div> */}
          </div>
        </header>
        <main>
          <IndexDashPart roleAndData={roleAndData} />
        </main>
      </div>
    </div>
  );
};

export default UserActivity;
