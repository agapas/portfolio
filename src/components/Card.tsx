import React from "react";
import { Project } from "App";

interface PropTypes {
  project: Project;
  imageSrc?: string;
}

export const Card = ({ project, imageSrc }: PropTypes) => {
  const { label, description } = project;
  return (
    <div className={`card ${imageSrc ? "with-image" : ""}`}>
      {imageSrc && <img src={imageSrc} alt={label} />}
      <div className="project-info">
        <h2 className="project-title">{label}</h2>
        <p>{description}</p>
        {/* link to demo */}
        {/* link to project on github */}
        {/* list of tags */}
      </div>
    </div>
  );
};
