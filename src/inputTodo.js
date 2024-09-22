import React, { useState } from "react";
import './inputTodo.css';

const InputTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]); // new state for todo list

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]); // add new todo to the list
      setInputValue(""); // clear input field
    }
  };

  return (
    <div className="MainTodo">
      <h1 className="todoTitle">TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button className="addTodo" type="submit">Add Todo</button>
      </form>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputTodo;