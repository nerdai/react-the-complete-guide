import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./App.css";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]

  const addTodoHandler = (text: string) => {

  };

  return (
    <div>
      <NewTodo onAddTodo={}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
