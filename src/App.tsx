import React, { Component } from "react";
import jsonData from "resources/data.json";
import { Header } from "components/header";
import "./App.css";

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

interface Project {
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
    this.setState({ data: { ...jsonData } }, () => console.log(this.state));
  }

  render() {
    const { details } = this.state.data;
    return (
      <div className="App">
        <Header {...details} />
        <div className="content">some content</div>
      </div>
    );
  }
}

export default App;
