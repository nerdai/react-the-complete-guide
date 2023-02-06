import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContextProvider from "./store/todos-context";
import "./App.css";

function App() {
  

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
