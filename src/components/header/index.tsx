import React from "react";
import { Details } from "App";
import { Info } from "./info";
import { Links } from "./links";

export const Header = ({ name, occupation, contactInfo }: Details) => {
  return (
    <header>
      <Info name={name} occupation={occupation} />
      <Links
        email={contactInfo["email"]}
        github={contactInfo["github"]}
        linkedin={contactInfo["linkedin"]}
      />
    </header>
  );
};
