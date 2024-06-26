import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const temprole = JSON.parse(sessionStorage.getItem("userData"))?.[0]?.role;
    if (temprole) {
      setUserRole(temprole);
    }
  }, []);
  console.log(userRole);
  const navigate = useNavigate();

  const disconnect = () => {
    sessionStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div>
      <div key="1" className="h-screen bg-white flex ">
        {/* sidebar  */}
        <aside className="w-1/4 bg-indigo-950 shadow-lg p-4 h-screen">
          <h2 className="text-xl mb-4 text-white">Menu</h2>
          <nav>
            <ul className="mb-8 container-fluid  ">
              <li className="mb-2">
                <button className="w-full text-left border p-2 hover:bg-indigo-500 transition hover:text-white rounded-xl">
                  <Link
                    to="/dashboard"
                    className="text-decoration-none text-white"
                  >
                    Tableau de bord
                  </Link>
                </button>
              </li>
              {userRole === "operateur de compte" && (
                <li className="mb-2">
                  <button className="w-full text-left border p-2 hover:bg-indigo-500 transition hover:text-white rounded-xl">
                    <Link
                      to="/dashboard/gestionClient"
                      className="text-decoration-none text-white"
                    >
                      Gestion de clients
                    </Link>
                  </button>
                </li>
              )}
              <li className="mb-2">
                <button className="w-full text-left border p-2 text-white hover:bg-indigo-500 transition hover:text-white rounded-xl">
                  <Link
                    to="/dashboard/configuration"
                    className="text-decoration-none text-white"
                  >
                    Paramètres
                  </Link>
                </button>
              </li>
              <button
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-3 px-4 rounded-xl"
                onClick={disconnect}
              >
                Déconnexion
              </button>
            </ul>
          </nav>
        </aside>

        <div className="border w-full overflow-auto">
          <Outlet context={userRole} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
