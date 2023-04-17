import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Shivendra",
    last: "Jat",
  };
  const nameList = [
    {
      first: "Jyoti",
      last: "Kumari",
    },
    {
      first: "Shivendra",
      last: "Jat",
    },
    {
      first: "Anandi",
      last: "Tripathi",
    },
  ];
  return (
    <div className="App">
      <Greet name="Shivendra" messageCount={20} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
