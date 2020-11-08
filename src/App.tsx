import React from "react";
import { Info } from "components/header/Info";
import { Links } from "components/header/Links";
import "./App.css";

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
