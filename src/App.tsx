import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input inputValue="" onChangeValue={(event) => console.log(event.target.value)} />
    </div>
  );
}

export default App;
