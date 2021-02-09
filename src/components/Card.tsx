import React from "react";
import { Project } from "App";
import image from "../resources/images/react-currency-converter.jpg";

interface PropTypes {
  project: Project;
}

export const Card = ({ project }: PropTypes) => {
  console.log(project);

  const imagePath = image || "";
  return (
    <div className="card">
      <img src={imagePath} alt="" />
      <h2>{project.label}</h2>
      <p>{project.description}</p>
    </div>
  );
};
