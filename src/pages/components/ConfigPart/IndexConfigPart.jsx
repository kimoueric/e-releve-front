import React from "react";
import AdminConfig from "./AdminConfig";
import OtherConfig from "./OtherConfig";

const IndexConfigPart = ({ roleAndData }) => {
  const returnPart = (role) => {
    if (role === "administrateur") return <AdminConfig />;
    else return <OtherConfig />;
  };

  return <div>{returnPart(roleAndData.role)}</div>;
};

export default IndexConfigPart;
