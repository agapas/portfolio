import React from "react";
import jsonData from "resources/data.json";
import { Header } from "components/header";
import { CardList } from "components/CardList";
import "App.css";

export interface ContactInfo {
  [name: string]: string;
}

export interface Details {
  name: string;
  occupation: string;
  contactInfo: ContactInfo;
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

type State = {
  data: Data;
};

class App extends React.Component<{}, State> {
  displayName = "App";
  state: State = {
    data: {
      details: {
        name: "",
        occupation: "",
        contactInfo: {},
      },
      projects: [],
    },
  };

  componentDidMount() {
    this.setState({ data: jsonData });
  }

  render() {
    const { details, projects } = this.state.data;
    return (
      <div className="App">
        <Header {...details} />
        <CardList projects={projects} />
      </div>
    );
  }
}

export default App;
