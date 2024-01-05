import React from "react";
import Header from "./components/Header";
import background from "../assets/bacground.jpeg";
import image from "../assets/fond.png";
import telephone from "../assets/appel-telephonique.png";
import email from "../assets/enveloppe-de-courrier-electronique.png";
import localiateur from "../assets/localisateur.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="overflow-hidden bg-local"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />
      {/* first container */}
      <div className="flex mt-[110px]">
        {/* left container */}
        <div className=" p-8">
          <p className="text-4xl text-indigo-950">
            Bienvenue sur HIFADIH E-RELEVE, la plateforme e-relevé qui vous
            simplifie la vie. Connectez-vous et vivez une expérience utilisateur
            géniale.
          </p>
          <button className="w-32 bg-indigo-950 text-center p-1 rounded-full mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30 ">
            <Link
              to={"/connexion"}
              className="text-xs text-white text-decoration-none"
            >
              Se connecter
            </Link>
          </button>
        </div>

        {/* right container */}
        <div className="w-1/4">
          <div className="relative border-4 rounded-full w-96 h-96 border-indigo-950 bg-white flex items-center left-2 p-5">
            <div className=" p-1">
              <img src={image} alt="" className="w-3/4" />
            </div>
          </div>
        </div>
      </div>

      {/* second container */}
      <div className="flex my-1">
        {/* left container  */}
        <div className="relative right-[150px] w-1/4">
          <div className="w-96 h-96 bg-indigo-950 rounded-full border-4 border-white "></div>
        </div>

        {/* right container  */}
        <div className="flex flex-col justify-start text-center  w-3/4 me-9 p-3">
          <h5 className="text-2xl text-indigo-950 mb-3">À propos de nous</h5>
          <p className="">
            HIFADIH E-RELEVE est un service web proposé par l'entreprise HIFADIH
            BUSINESS & TECHNOLOGY. Notre plateforme met à disposition des
            solutions innovantes qui permettront de fournir de manière simple,
            moderne, efficace et sécurisée des relevés de transactions à vos
            clients.
          </p>
          {/* contact container  */}
          <div>
            <h5 className="text-2xl text-indigo-950 my-5">Contact</h5>
            <div>
              <ul className="flex justify-between">
                <li>
                  <div className="flex flex-col justify-center items-center">
                    <img src={telephone} alt="icon" className="w-6" />
                    <ul className="flex flex-col items-start text-xs">
                      <li>+212 625 412 000</li>
                      <li>+33 632 456 019</li>
                      <li>+225 0585 503 939</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col justify-center items-center">
                    <img src={email} alt="icon" className="w-6" />
                    <h5 className="text-xs">info@hifadih.com</h5>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col justify-center items-center">
                    <img src={localiateur} alt="icon" className="w-6" />
                    <h5 className="text-xs">
                      Cocody, Abatta, Cité Don Mello, Villa 115, Abidjan, Côte
                      d’Ivoire
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* last container  */}
      <div className="flex justify-center mb-3 ">
        <form
          action=""
          className="border-2  text-xs rounded-2xl border-indigo-950"
        >
          <div className="flex">
            <div className="flex flex-col m-2">
              <label htmlFor="nom">nom</label>
              <input
                type="text"
                className="border-2 w-64 p-2 border-indigo-950 rounded-xl"
                required
                id="nom"
              />
            </div>
            <div className="flex flex-col m-2">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="border-2 w-64 p-2 border-indigo-950 rounded-xl"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col m-2">
              <label htmlFor="message">message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border-2 w-64 h-32 border-indigo-950 rounded-xl"
              ></textarea>
            </div>
            <div className="flex items-end mb-5 mx-5">
              <button
                type="submit"
                className="w-32 rounded-full p-2 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30 "
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
