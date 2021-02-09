import React from "react";
import { Project } from "App";
import { Card } from "./Card";

interface PropTypes {
  projects: Project[];
}

export const CardList = ({ projects }: PropTypes) => {
  return (
    <div className="card-list">
      {projects.map((project) => (
        <Card key={project.name} project={project} />
      ))}
    </div>
  );
};
