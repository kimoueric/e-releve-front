import { useQuery } from "@tanstack/react-query";
import background from "../assets/bacground.jpeg";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { displayData } from "../assets/displayData";
import Modele1 from "./components/Models/Banque/Modele1";

const CreationReleve = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState([]);
  const dataU = JSON.parse(sessionStorage.getItem("userData"));
  const id = dataU[0].id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const infoReleve = displayData;
  const informations = infoReleve[dataU[0].type_entreprise][0];

  let allElements = [];

  for (let key in informations) {
    if (informations.hasOwnProperty(key)) {
      informations[key].forEach((element) => {
        allElements.push(element);
        allElements.sort();
      });
    }
  }
  const { data: dataUser } = useQuery({
    queryKey: ["dataUser"],
    queryFn: () => {
      return axios
        .get(`http://localhost:3000/donnees?id_utilisateur=${id}`)
        .then((res) => res.data[0].type_service);
    },
  });
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setCheckedItems([...checkedItems, name]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== name));
    }
  };
  // console.log(checkedItems);
  const onSubmit = (data) => {
    // localStorage.setItem("modeleId", data.modele);
    if (data) navigate("/choixClient");
  };
  return (
    <div
      className="text-xs w-100 py-8 background-local"
      style={{
        background: `url(${background})`,
      }}
    >
      <h2 className="text-center text-3xl text-bold text-indigo-950 mb-3">
        Créer un relevé
      </h2>
      <div className="w-100 rounded-s-xl mx-3 py-9 px-4 flex  items-center justify-between bg-white shadow-2xl">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Choisir le modèle de relevé</label>
              <div className="flex">
                <div className="flex flex-col my-2 mx-2">
                  <input
                    type="radio"
                    className={`peer hidden radio-input ${
                      errors.modele && "border-red-500"
                    }`}
                    id="modele1"
                    value="1"
                    name="modele"
                    {...register("modele", { required: true })}
                  />
                  <label
                    className={`w-[50px] h-[50px] border my-3 border-2xl border-indigo-950 peer-checked:border-indigo-500`}
                    htmlFor="modele1"
                  ></label>
                </div>

                <div className="flex flex-col my-2 mx-2">
                  <input
                    type="radio"
                    className={`peer hidden radio-input ${
                      errors.modele && "border-red-500"
                    }`}
                    id="modele2"
                    value="2"
                    name="modele"
                    {...register("modele", { required: true })}
                  />
                  <label
                    className={`w-[50px] h-[50px] border my-3 border-2xl border-indigo-950 peer-checked:border-indigo-500`}
                    htmlFor="modele2"
                  ></label>
                </div>

                <div className="flex flex-col my-2 mx-2">
                  <input
                    type="radio"
                    className={`peer hidden radio-input ${
                      errors.modele && "border-red-500"
                    }`}
                    id="modele3"
                    value="3"
                    name="modele"
                    {...register("modele", { required: true })}
                  />
                  <label
                    className={`w-[50px] h-[50px] border my-3 border-2xl border-indigo-950 peer-checked:border-indigo-500`}
                    htmlFor="modele3"
                  ></label>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col my-2 ${errors.intitule && "has-error"}`}
            >
              <label htmlFor="intitule">Intitulé du relevé</label>
              <input
                type="text"
                className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                  errors.intitule ? "border-red-500" : ""
                }`}
                {...register("intitule", { required: true })}
              />
            </div>

            <div
              className={`flex flex-col my-2 ${errors.format && "has-error"}`}
            >
              <label htmlFor="frequence">Choisir le type de releve</label>
              <select
                name="product"
                className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                  errors.format ? "border-red-500" : ""
                }`}
              >
                {dataUser &&
                  dataUser.map((element, index) => {
                    return (
                      <option key={index} value="pdf">
                        {element}
                      </option>
                    );
                  })}
              </select>
            </div>
            {/* <div className={`flex flex-col my-2 ${errors.date && "has-error"}`}>
            <label htmlFor="frequence">Choisir la fréquence d'envoi</label>
            <input
              type="date"
              className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                errors.date ? "border-red-500" : ""
              }`}
              {...register("date", { required: true })}
            />
          </div> */}

            {/* <div className={`flex flex-col my-2 ${errors.format && "has-error"}`}>
            <label htmlFor="frequence">Choisir le format d'envoi</label>
            <select
              name="format"
              className={`border-2 w-[460px] p-3 border-indigo-950 rounded outline-none ${
                errors.format ? "border-red-500" : ""
              }`}
            >
              <option value="pdf">PDF</option>
            </select>
          </div> */}
            <fieldset className="h-[200px] overflow-auto border-2  p-3 border-indigo-950 rounded outline-none">
              <legend className="text-sm mb-1">
                Selectionner les informations a afficher sur le releve
              </legend>
              {allElements &&
                allElements.map((element, index) => {
                  return (
                    <div className="w-100 my-2" key={index}>
                      <label class="flex items-center justify-between border border-indigo-950 p-2 rounded-sm">
                        <span>{element}</span>
                        <input
                          type="checkbox"
                          name={`${element}`}
                          onChange={handleCheckboxChange}
                        />
                      </label>
                    </div>
                  );
                })}
            </fieldset>
            <button
              type="submit"
              className="w-44 my-6 rounded-3xl p-3 bg-indigo-950 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30"
            >
              Suivant
            </button>
          </form>
        </div>
        <div className=" w-1/2">
          <h6 className="text-center">
            Une prévisualisation de vos personnalisations apparaîtra ici.
          </h6>
          <Modele1 data={checkedItems} />
        </div>
      </div>
    </div>
  );
};

export default CreationReleve;
