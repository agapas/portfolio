import { Project } from "App";
import { LinkButton } from "./LinkButton";

interface PropTypes {
  project: Project;
}

export const Card = ({ project }: PropTypes) => {
  const { imageType, name, label, description, links, tags } = project;
  const demoUrl = links["demo"];
  const codeUrl = links["url"];

  return (
    <div className={`card ${imageType ? "with-image" : ""}`}>
      <div className="label">{label}</div>
      <div className="content">
        {imageType && <img src={`/images/${name}.${imageType}`} alt={label} />}
        <div className="info">
          <div className="description">{description}</div>
          <div className="links">
            {demoUrl ? (
              <LinkButton key="demo" label="Demo" href={demoUrl} />
            ) : null}
            {codeUrl ? (
              <LinkButton key="repo" label="Github repository" href={codeUrl} />
            ) : null}
          </div>
          <div className="tags">
            {Object.entries(tags).map(([key, val]) => (
              <LinkButton key={key} label={key} href={val || ""} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
