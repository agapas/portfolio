import React from "react";

interface PropTypes {
  label: string;
  href: string;
}

export const LinkButton = ({ label, href }: PropTypes) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="link-button">{label}</div>
  </a>
);
