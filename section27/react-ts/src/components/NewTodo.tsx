import React, { useContext } from "react";
import { useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
