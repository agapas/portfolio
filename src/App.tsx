import jsonData from "assets/data.json";
import { Header } from "components/header";
import MainContent from "components/main-content";
import "./App.css";

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
