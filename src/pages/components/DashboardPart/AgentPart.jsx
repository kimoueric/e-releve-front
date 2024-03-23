import React from "react";
import { Link } from "react-router-dom";
import ReleveCard from "../ReleveCard";

const AgentPart = ({ stories }) => {
  return (
    <div>
      <h2 className="text-lg mb-4">Relevés récents</h2>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 border border-indigo-950 rounded-xl p-4 ">
        {stories &&
          stories.map((story, index) => {
            return <ReleveCard data={story} key={index} />;
          })}
      </section>
      <button className="bg-indigo-950 w-48 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl my-2">
        <Link to={"/creation"} className="text-white text-decoration-none">
          Créer un relevé
        </Link>
      </button>
    </div>
  );
};

export default AgentPart;
