import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";

const TodoList = () => {
  const [todos, setTodos] = useState([
    "Web Todo Liste erstellen",
    "Buch lesen",
    "ins Fitnessstudio gehen",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const drowLine = (index, checked) => {
    const todoBoxes = document.querySelectorAll(".todo-box");
    const todoBox = todoBoxes[index];
    todoBox.style.textDecoration = checked ? "line-through" : "none";
  };

  const removeTodo = (index) => {
    const todoBoxes = document.querySelectorAll(".todo-box");
    const todoBox = todoBoxes[index];
    if (todoBox.style.textDecoration === "line-through") {
      todoBox.style.display = "none";
    }
  };

  return (
    <>
      <ul className="todoList">
        {todos.map((todo, index) => {
          return (
            <div className="todo-box" key={index}>
              <input
                type="checkbox"
                onClick={(event) => drowLine(index, event.target.checked)}
              />
              <li>{todo}</li>
              <BsTrash3Fill
                style={{
                  backgroundColor: "orange",
                  padding: "5",
                  marginLeft: "auto",
                }}
                onClick={() => removeTodo(index, true)}
              />
            </div>
          );
        })}
      </ul>
      <form className="input-container" onSubmit={addTodo}>
        <input
          an
          type="text"
          placeholder="Add Todo ..."
          className="todoInput"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={addTodo} className="submitButton">
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoList;
