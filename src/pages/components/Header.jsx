import React from "react";
import logo from "../../assets/hifadih.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 w-full z-10 bg-white shadow-2xl bg-blend-screen">
        <nav className="flex justify-between items-center p-2 ">
          {/* logo container */}
          <div className="bg-white p-1 rounded-lg p-3">
            <img src={logo} alt="logo" className="w-28 " />
          </div>

          {/* menu container */}
          <div className=" flex justify-end">
            <ul className="flex items-center text-indigo-950 ">
              <li className="w-32  text-end me-8 transition hover:scale-105 hover:text-indigo-600">
                <a
                  href=""
                  className="text-xs text-indigo-950 text-decoration-none"
                >
                  Contact
                </a>
              </li>
              <li className=" w-32 transition hover:text-indigo-500 hover:scale-105">
                <a
                  href=""
                  className="text-xs text-decoration-none text-indigo-950 "
                >
                  À propos
                </a>
              </li>
              <li className="bg-indigo-950 w-32 text-center p-1  rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30 ">
                <Link
                  to={"/connexion"}
                  className="text-xs text-white text-decoration-none"
                >
                  Connexion
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
