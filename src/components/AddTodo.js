import React, { useState } from "react";
import { nanoid } from "nanoid";
const AddTodo = ({ setTodo, deleteAll, markAllTodos, setFilter }) => {
  const [inputData, setInputData] = useState("");

  const addTodo = () => {
    const todoObj = {
      id: nanoid(),
      value: inputData,
      isCompleted: false,
      isDeleted: false,
    };

    setTodo((prevValue) => [...prevValue, todoObj]);
    setInputData("");
  };

  return (
    <div className="add-field_control font-bold d-flex flex-row  mt-10 justify-content-center">
      <input
        className="mx-2 fs-3"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Add todo..."
      />
      <button className="btn btn-primary mx-2 " onClick={addTodo}>
        AddTodo
      </button>
      <button className="btn btn-danger mx-2 " onClick={deleteAll}>
        DeleteAll
      </button>

      <button className="btn btn-primary" onClick={markAllTodos}>
        Mark All
      </button>

      <button onClick={() => setFilter("all")}>Show All</button>
      <button onClick={() => setFilter("deleted")}>Show Deleted</button>
      <button onClick={() => setFilter("completed")}>Show completed</button>
    </div>
  );
};

export default AddTodo;
