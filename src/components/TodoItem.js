import React from "react";
const TodoItem = ({
  todo: { id, value, isCompleted },
  deleteItem,
  MarkComplete,
}) => {
  const style = {
    textDecoration: isCompleted === true ? "line-through" : "none",
    fontSize: "24px",
    fontWeight: "bold",
    alignItems: "center",
  };
  return (
    <>
      <div
        className=" mx-auto p-1 bg-dark text-white d-flex justify-content-between 
      align-items-center my-10 mx-0 mt-2 w-50 border
       border-dark font-weight-bold"
      >
        <p style={style}>{value}</p>
        <button
          className="btn btn-primary mx-2 w-25"
          onClick={() => MarkComplete(id)}
        >
          ✓
        </button>
        <button
          className="btn btn-danger  mx-2 w-25"
          onClick={() => deleteItem(id)}
        >
          X
        </button>
      </div>
    </>
  );
};
export default TodoItem;
