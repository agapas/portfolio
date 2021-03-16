import React from "react";
import { Project } from "App";
import { LinkButton } from "./LinkButton";

interface PropTypes {
  project: Project;
  imageSrc?: string;
}

export const Card = ({ project, imageSrc }: PropTypes) => {
  const { label, description, links, tags } = project;
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
            {demoUrl ? (
              <LinkButton key="demo" label="Demo" href={demoUrl} />
            ) : null}
            {codeUrl ? (
              <LinkButton key="repo" label="Code on Github" href={codeUrl} />
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
