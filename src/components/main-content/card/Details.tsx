import { Links } from "App";
import { LinkButtons } from "./LinkButtons";
import styles from "./Details.module.css";

interface PropTypes {
  description: string;
  withImage: boolean;
  links?: Links;
  tags?: Links;
}

export const Details = ({ description, withImage, links, tags }: PropTypes) => {
  const withImageClass = withImage ? styles["with-image"] : "";
  return (
    <div className={`${styles.details} ${withImageClass}`}>
      <div className={styles.description}>{description}</div>
      {links && <LinkButtons data={links} />}
      {tags && <LinkButtons data={tags} dataType="tags" />}
    </div>
  );
};
