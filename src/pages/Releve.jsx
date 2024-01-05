import React from "react";

import IndexBank from "./components/Models/Banque/IndexBank";
import IndexAssurance from "./components/Models/Assurance/IndexAssurance";
const Releve = () => {
  const id = localStorage.getItem("modeleId");
  const type = "Banque";

  return (
    <div>
      {type == "Banque" && <IndexBank id={id} />}
      {type == "Assurance" && <IndexAssurance id={id} />}
    </div>
  );
};

export default Releve;
