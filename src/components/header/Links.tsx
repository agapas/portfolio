import React from "react";
import { ContactInfo } from "App";
import { Link } from "./Link";
import { Email } from "./Email";

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
      target="_blank"
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
