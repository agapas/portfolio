import React from "react";
import { Link } from "./Link";

export const Links = () => (
  <div className="header-links">
    <Link href="mailto:agnieszka_pas@yahoo.ie" icon="fa-envelope" />
    <Link href="https://github.com/agapas" target="_blank" icon="fa-github" />
    <Link
      href="https://www.linkedin.com/in/agnieszka-pas-26131b101/"
      target="_blank"
      icon="fa-linkedin-square"
    />
  </div>
);
