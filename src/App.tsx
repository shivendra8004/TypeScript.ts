import React from "react";
import "./App.css";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Hello Guys, Jai Shree Ram</Heading>
      </Oscar>
      <Greet name="Shiv" isLoggedIn={false} />
    </div>
  );
}

export default App;
