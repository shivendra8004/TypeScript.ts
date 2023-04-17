import React from "react";
import "./App.css";
import Status from "./components/Status";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
    </div>
  );
}

export default App;
