import React, { Component } from "react";
import jsonData from "resources/data.json";
import { Header } from "components/header";
import "./App.css";
import { CardList } from "components/CardList";

interface ContactInfo {
  [linkName: string]: string;
}

export interface Details {
  name: string;
  occupation: string;
  contactInfo: ContactInfo;
}

interface Tag {
  name: string;
  url: string;
}

export interface Project {
  name: string;
  tags: Tag[];
  description: string;
  url: string;
  demo?: string;
}

interface Data {
  details: Details;
  projects: Project[];
}

interface StateType {
  data: Data;
}

class App extends Component<{}, StateType> {
  displayName = "App";
  state = {
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
    this.setState({ data: { ...jsonData } });
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
