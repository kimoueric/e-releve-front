import React from "react";
import ReleveCard from "../ReleveCard";
import { Link } from "react-router-dom";

const DesignPart = ({ stories }) => {
  return (
    <div>
      <h2 className="text-lg mb-4">Modeles récents</h2>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 border border-indigo-950 rounded-xl p-4 ">
        {stories &&
          stories.map((story, index) => {
            return <ReleveCard data={story} key={index} />;
          })}
      </section>
      <button className="bg-indigo-950 w-48 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl my-2">
        <Link to={"/creation"} className="text-white text-decoration-none">
          Creer un modele
        </Link>
      </button>
    </div>
  );
};

export default DesignPart;
