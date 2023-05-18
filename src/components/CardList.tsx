import { Dictionary, Project } from "App";
import { Card } from "./Card";

const getImagePaths = (): Dictionary => {
  const regex = /\.(png|jpe?g|svg)$/;
  const allImages = import.meta.glob(
    ["../assets/images/*.jpg", "../assets/images/*.png"],
    { eager: true } // to get rid of promise
  );

  return Object.keys(allImages).reduce((acc, fullPath) => {
    const withoutFileExt = fullPath.replace("./", "").replace(regex, "");
    const imageName = withoutFileExt.substring(
      withoutFileExt.lastIndexOf("/") + 1
    );

    if (!imageName.length) return acc;

    const url = new URL(fullPath, import.meta.url);
    const pathName = url.pathname;
    const data = {
      [imageName]: pathName,
    };
    return { ...acc, ...data };
  }, {});
};

interface PropTypes {
  projects: Project[];
}

export const CardList = ({ projects = [] }: PropTypes) => {
  const imagePaths = getImagePaths();

  return (
    <div className="card-list">
      {projects.map((project) => {
        const imageSrc = imagePaths[project.name];
        return (
          <Card key={project.name} project={project} imageSrc={imageSrc} />
        );
      })}
    </div>
  );
};
