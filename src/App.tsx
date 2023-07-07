import { Header } from "components/header";
import MainContent from "components/main-content";
import "./App.css";
import jsonData from "assets/data.json";

export interface Dictionary {
  [name: string]: string;
}

export interface Details {
  name: string;
  occupation: string;
  contactInfo: Dictionary;
}

export interface Links {
  [name: string]: string | undefined;
}

export interface Project {
  label: string;
  description: string;
  links: Links;
  tags: Links;
  imageName?: string;
}

function App() {
  const { details, projects } = jsonData;

  return (
    <div className="app">
      <Header {...details} />
      <MainContent projects={projects} />
    </div>
  );
}

export default App;
