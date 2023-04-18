import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(e, id) => {
          console.log("Button Clicked", e, id);
        }}
      />
    </div>
  );
}

export default App;
