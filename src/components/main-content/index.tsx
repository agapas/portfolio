import { Project } from "App";
import { Card } from "./card";
import "./index.css";

interface PropTypes {
  projects: Project[];
}

const MainContent = ({ projects = [] }: PropTypes) => {
  return (
    <div className={"main-content"}>
      {projects.map((project) => (
        <Card key={project.label} project={project} />
      ))}
    </div>
  );
};

export default MainContent;
