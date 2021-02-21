import React from "react";
import { Project } from "App";
import { Card } from "./Card";

const importImages = () => {
  /*
    IMPORTANT:
      1. In the case of the error "Property context does not exist on type NodeRequire":
          - install webpack-env package: npm i -D @types/webpack-env
          - add: "types": ["node", "webpack-env"] to compilerOptions in tsconfig.json
          - restart editor
      2. don't pass variables into require.context(), only literals are supported by webpack
  */
  const r = require.context("../resources/images", false, /\.(png|jpe?g|svg)$/);

  let images: any = {};
  const regex = /\.(png|jpe?g|svg)$/;

  r.keys().forEach((item: string) => {
    images[item.replace("./", "").replace(regex, "")] = r(item);
  });

  return images;
};

interface PropTypes {
  projects: Project[];
}

export const CardList = ({ projects }: PropTypes) => {
  const allImages = importImages();
  return (
    <div className="card-list">
      {projects.map((project) => {
        const imageSrc = allImages[project.name]?.default;
        return (
          <Card key={project.name} project={project} imageSrc={imageSrc} />
        );
      })}
    </div>
  );
};
