import React from "react";
import "./App.css";

const App: React.FC<unknown> = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="info">
          <div className="name">Agnieszka Pas</div>
          <div className="description">FRONT-END SOFTWARE ENGINEER</div>
        </div>
        <div className="links">
          <a href="mailto:agnieszka_pas@yahoo.ie">
            <i className="fa fa-fw fa-envelope fa-lg" />
          </a>
          <a
            href="https://github.com/agapas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-fw fa-github fa-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/agnieszka-pas-26131b101/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-fw fa-linkedin-square fa-lg" />
          </a>
        </div>
      </header>
      <div className="content">some content</div>
    </div>
  );
};

export default App;
