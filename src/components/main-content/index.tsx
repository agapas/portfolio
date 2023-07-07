import { Project } from "types";
import { Card } from "./card";
import styles from "./index.module.css";

interface PropTypes {
  projects: Project[];
}

const MainContent = ({ projects = [] }: PropTypes) => {
  return (
    <div className={styles["main-content"]}>
      {projects.map((project) => (
        <Card key={project.label} project={project} />
      ))}
    </div>
  );
};

export default MainContent;
