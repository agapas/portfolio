import { Links } from "App";
import { Link } from "components/common/Link";
import styles from "./LinkButtons.module.css";

interface PropTypes {
  data: Links;
  dataType?: string;
}

export const LinkButtons = (props: PropTypes) => {
  const { data, dataType = "links" } = props;
  return (
    <div className={styles[`${dataType}`]}>
      {Object.entries(data).map(([key, val]) => (
        <Link key={key} label={key} href={val || ""} />
      ))}
    </div>
  );
};
