import Todos from "./components/Todos";
import "./App.css";

const DUMMY_ITEMS = ["Learn React", "Learn Typescript"];

function App() {
  return (
    <div>
      <Todos items={DUMMY_ITEMS} />
    </div>
  );
}

export default App;
