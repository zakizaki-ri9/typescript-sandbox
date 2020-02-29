import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string) => {
    setTodos([...todos, { text: text, complete: false }]);
  };

  const completeTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) => {
        if (index === i) todo.complete = !todo.complete;
        return todo;
      })
    );
  };

  const removeTodo = (index: number) => {
    setTodos(
      todos.filter((_, i) => {
        return index !== i;
      })
    );
  };

  const todoElems = todos.map((todo, index) => {
    return (
      <li key={index.toString()}>
        <button onClick={() => completeTodo(index)}>{todo.text}</button>
        <button onClick={() => removeTodo(index)}>remove</button>
        {todo.complete ? "completed" : ""}
      </li>
    );
  });

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value.toString())}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>{todoElems}</ul>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
