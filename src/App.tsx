import "./App.css";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Hello Guys, Jai Shree Ram</Heading>
      </Oscar>
      <Greet name="Shiv" messageCount={12} isLoggedIn={true} />
      <Button
        handleClick={() => {
          console.log("Button Clicked");
        }}
      />
    </div>
  );
}

export default App;
