import React from "react";
import { Info } from "components/header/Info";
import { Links } from "components/header/Links";
import "./App.css";

// TODO:
// move data to resorces and change App into class component with fetching data
const data = {
  name: "Agnieszka Pas",
  occupation: "Front-End Software Engineer",
  "contact-info": {
    email: "agnieszka_pas@yahoo.ie",
    github: "https://github.com/agapas",
    linkedin: "https://www.linkedin.com/in/agnieszka-pas-26131b101/",
  },
  projects: {},
};

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="header">
        <Info name="Agnieszka Pas" occupation="Front-End Software Engineer" />
        <Links />
      </header>
      <div className="content">some content</div>
    </div>
  );
};

export default App;
