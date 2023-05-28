import { Project } from "App";
import { Label } from "components/common/Label";
import { Details } from "./Details";
import { Image } from "./Image";
import styles from "./index.module.css";

interface PropTypes {
  project: Project;
}

export const Card = ({ project }: PropTypes) => {
  const { imageName, label, description, links, tags } = project;

  const baseUrl = import.meta.env.DEV ? "" : "/portfolio";
  const imageUrl = `${baseUrl}/images/${imageName}`;

  return (
    <div className={styles.card}>
      <Label text={label} />
      <div className={styles.content}>
        {imageName && (
          <Image url={imageUrl} alt={`${label} project interface`} />
        )}
        <Details
          description={description}
          withImage={!!imageName}
          links={links}
          tags={tags}
        />
      </div>
    </div>
  );
};
