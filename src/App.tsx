import { useState, useEffect } from "react";
import { CardList } from "components/CardList";
import { Header } from "components/header";
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

interface Links {
  [name: string]: string | undefined;
}

export interface Project {
  name: string;
  label: string;
  description: string;
  links: Links;
  tags: Links;
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
      <CardList projects={projects} />
    </div>
  );
}

export default App;
