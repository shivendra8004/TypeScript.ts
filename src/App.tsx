import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container styles={{ border: "1px solid black", padding: "1rem", background: "green" }} />
    </div>
  );
}

export default App;
