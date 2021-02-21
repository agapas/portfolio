import React from "react";
import { Project } from "App";

interface PropTypes {
  project: Project;
  imageSrc?: string;
}

export const Card = ({ project, imageSrc }: PropTypes) => {
  const { label, description } = project;
  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={label} />}
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
};
