import React from "react";
import { ContactInfo } from "App";
import { Email } from "./Email";
import { Link } from "./Link";

interface PropTypes {
  contactInfo: ContactInfo;
}

const getComponent = (key: string, val: string) => {
  return key === "email" ? (
    <Email key={key} email={val} />
  ) : (
    <Link
      key={key}
      href={val}
      icon={key === "github" ? "fa-github" : "fa-linkedin-square"}
    />
  );
};

export const Links = ({ contactInfo }: PropTypes) => {
  return (
    <div className="links">
      {Object.entries(contactInfo).map(([key, val]) => getComponent(key, val))}
    </div>
  );
};
