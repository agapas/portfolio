import React from "react";
import { Project } from "App";

interface PropTypes {
  project: Project;
}

export const Card = ({ project }: PropTypes) => {
  // TODO:
  // - make it work also for the case when some images not exist in images dir
  // (so far the require() works only when all project images exist in the folder)
  const image = require(`resources/images/${project.name}.jpg`);
  const imagePath = image?.default || "";

  return (
    <div className="card">
      <img src={imagePath} alt={project.label} />
      <h2>{project.label}</h2>
      <p>{project.description}</p>
    </div>
  );
};
