import React from "react";
import background from "../assets/bacground.jpeg";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import IndexConfigPart from "./components/ConfigPart/IndexConfigPart";

const Configuration = () => {
  const navigate = useNavigate();
  const userRole = useOutletContext();

  const onSubmit = (data) => {
    if (data) navigate("/dashboard");
  };
  const roleAndData = {
    role: userRole,
    submit: onSubmit,
  };

  return (
    <div
      className="overflow-hidden backgroung-local h-screen"
      style={{
        background: `url(${background})`,
      }}
    >
      <IndexConfigPart roleAndData={roleAndData} />
    </div>
  );
};

export default Configuration;
