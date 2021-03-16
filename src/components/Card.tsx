import React from "react";
import { Project } from "App";
import { LinkButton } from "./LinkButton";

interface PropTypes {
  project: Project;
  imageSrc?: string;
}

export const Card = ({ project, imageSrc }: PropTypes) => {
  const { label, description, links } = project;
  const demoUrl = links["demo"];
  const codeUrl = links["url"];

  return (
    <div className={`card ${imageSrc ? "with-image" : ""}`}>
      <div className="label">{label}</div>
      <div className="content">
        {imageSrc && <img src={imageSrc} alt={label} />}
        <div className="info">
          <div className="description">{description}</div>
          <div className="links">
            {demoUrl ? <LinkButton label="Demo" href={demoUrl} /> : null}
            {codeUrl ? (
              <LinkButton label="Code on Github" href={codeUrl} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
