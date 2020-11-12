import React from "react";
import { Link } from "./link";

interface PropTypes {
  email: string;
  github: string;
  linkedin: string;
}

export const Links = ({ email, github, linkedin }: PropTypes) => (
  <div className="links">
    <Link href={`mailto:${email}`} icon="fa-envelope" />
    <Link href={github} target="_blank" icon="fa-github" />
    <Link href={linkedin} target="_blank" icon="fa-linkedin-square" />
  </div>
);
