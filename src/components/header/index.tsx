import { Details } from "types";
import { Info } from "./Info";
import { Links } from "./Links";
import "./index.css";

export const Header = ({ name, occupation, contactInfo }: Details) => {
  return (
    <header>
      <Info name={name} occupation={occupation} />
      <Links contactInfo={contactInfo} />
    </header>
  );
};
