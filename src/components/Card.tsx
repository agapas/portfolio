import React from "react";
import { Project } from "App";

interface PropTypes {
  project: Project;
}

export const Card: React.FC<PropTypes> = ({ project }: PropTypes) => {
  console.log(project);
  return (
    <div className="card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};
