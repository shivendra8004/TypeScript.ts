import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(e, id) => {
          console.log("Button Clicked", e, id);
        }}
      />
      <Input inputValue="" onChangeValue={(event) => console.log(event.target.value)} />
    </div>
  );
}

export default App;
