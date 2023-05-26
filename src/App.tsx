import { useState, useEffect } from "react";
import { Header } from "components/header";
import MainContent from "components/main-content";
import "./App.css";
import jsonData from "./assets/data.json";

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

interface Data {
  details: Details;
  projects: Project[];
}

const defaultData: Data = {
  details: {
    name: "",
    occupation: "",
    contactInfo: {},
  },
  projects: [],
};

function App() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const { details, projects } = data;

  return (
    <div className="app">
      <Header {...details} />
      <MainContent projects={projects} />
    </div>
  );
}

export default App;
