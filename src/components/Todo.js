import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const initialData = [
    {
      id: 1,
      value: "firsrt",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      value: "sec",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 3,
      value: "third",
      isCompleted: false,
      isDeleted: false,
    },
  ];

  const [todo, setTodo] = useState(initialData);
  const [filter, setFilter] = useState("all");

  const deleteAll = () => {
    setTodo([]);
  };

  const markAllTodo = () => {
    const markedTodo = todo.map((item) => {
      return { ...item, isCompleted: true };
    });
    setTodo(markedTodo);
  };

  const deleteItem = (id) => {
    console.log("delete towas clicked ", id);
    const modifiedTodos = todo.map((item) => {
      if (item.id === id) {
        const modifiedTodo = { ...item, isDeleted: true };
        return modifiedTodo;
      } else {
        return item;
      }
    });

    setTodo(modifiedTodos);
  };

  const MarkComplete = (id) => {
    const newItemList = todo.map((element) => {
      if (element.id === id) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      }
      return element;
    });
    setTodo(newItemList);
  };
  return (
    <>
      <div className="mx-auto">
        <AddTodo
          markAllTodos={markAllTodo}
          setTodo={setTodo}
          deleteAll={deleteAll}
          setFilter={setFilter}
          setTodos={setTodo}
        />

        <TodoList
          todo={todo}
          deleteItem={deleteItem}
          MarkComplete={MarkComplete}
          filter={filter}
        />
      </div>
    </>
  );
};

export default Todo;
