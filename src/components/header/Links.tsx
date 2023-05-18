import { Dictionary } from "App";
import { Email } from "./Email";
import { Link } from "./Link";

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
    <div className="links">
      {Object.entries(contactInfo).map(([key, val]) => getComponent(key, val))}
    </div>
  );
};
