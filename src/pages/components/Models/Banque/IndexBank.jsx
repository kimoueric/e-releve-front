import React from "react";
import { useNavigate } from "react-router-dom";
import Modele1 from "./Modele1";
import Modele2 from "./Modele2";

const IndexBank = ({ id }) => {
  const navigate = useNavigate();
  const startSending = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      {id == 1 && <Modele1 startSending={startSending} />}
      {id == 2 && <Modele2 startSending={startSending} />}
    </div>
  );
};

export default IndexBank;
