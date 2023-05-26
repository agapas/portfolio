import { Project } from "App";
import { Image } from "./Image";
import { Label } from "components/common/Label";
import { Details } from "./Details";
import "./index.css";

interface PropTypes {
  project: Project;
}

export const Card = ({ project }: PropTypes) => {
  const { imageName, label, description, links, tags } = project;

  const baseUrl = import.meta.env.DEV ? "" : "/portfolio";
  const imageUrl = `${baseUrl}/images/${imageName}`;

  return (
    <div className={`card ${imageName ? "with-image" : ""}`}>
      <Label text={label} />
      <div className="content">
        {imageName && (
          <Image url={imageUrl} alt={`${label} project interface`} />
        )}
        <Details description={description} links={links} tags={tags} />
      </div>
    </div>
  );
};
