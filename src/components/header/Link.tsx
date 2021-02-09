import React from "react";

interface PropTypes {
  icon: string;
  href: string;
  target?: string;
}

export const Link = ({ icon, href, target }: PropTypes) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
  >
    <i className={`fa fa-fw ${icon} fa-lg`} />
  </a>
);
