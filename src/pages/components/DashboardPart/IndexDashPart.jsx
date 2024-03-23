import React from "react";
import AdminPart from "./AdminPart";
import AgentPart from "./AgentPart";

const IndexDashPart = ({ roleAndData }) => {
  const returnPart = (role) => {
    if (role === "administrateur") return <AdminPart />;
    if (role === "agent") return <AgentPart stories={roleAndData.data} />;

    // Gestion pour les autres cas de rôle
    return <div>Rôle non reconnu</div>;
  };

  return <div>{returnPart(roleAndData.role)}</div>;
};

export default IndexDashPart;
