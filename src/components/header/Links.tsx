import { Dictionary } from "App";
import { Link } from "components/common/Link";
import { Email } from "./Email";
import styles from "./Links.module.css";

interface PropTypes {
  contactInfo: Dictionary;
}

const icons: Dictionary = {
  email: "fa-envelope",
  github: "fa-github",
  linkedin: "fa-linkedin-square",
};

const getComponent = (key: string, val: string) => {
  const icon = icons[key];

  return key === "email" ? (
    <Email key={key} email={val} icon={icon} />
  ) : (
    <Link key={key} href={val} icon={icon} />
  );
};

export const Links = ({ contactInfo }: PropTypes) => {
  return (
    <div className={styles.links}>
      {Object.entries(contactInfo).map(([key, val]) => getComponent(key, val))}
    </div>
  );
};
