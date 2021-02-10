import React from "react";

interface PropTypes {
  email: string;
}

export const Email = ({ email }: PropTypes) => (
  <a href={`mailto:${email}`}>
    <i className="fa fa-fw fa-envelope fa-lg" />
  </a>
);
