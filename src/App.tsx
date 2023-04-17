import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    first: "Shivendra",
    last: "Jat",
  };
  return (
    <div className="App">
      <Greet name="Shivendra" messageCount={20} isLoggedIn={true} />
      <Person personName={personName} />
    </div>
  );
}

export default App;
