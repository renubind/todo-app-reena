import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todo, deleteItem, MarkComplete, filter }) => {
  const filterMap = {
    all: () => true,
    completed: (item) => item.isCompleted === true,
    deleted: (item) => item.isDeleted === true,
  };
  return (
    <>
      {todo.length === 0 ? (
        <h3>empty</h3>
      ) : (
        <div>
          <ol>
            {todo.filter(filterMap[filter]).map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  todo={item}
                  deleteItem={deleteItem}
                  MarkComplete={MarkComplete}
                />
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

export default TodoList;
