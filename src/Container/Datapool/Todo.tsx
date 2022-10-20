import React from "react";
import { HiXMark } from "react-icons/hi2";
import "./Todo.css";

const Todo = ({ value }: any) => {
  return (
    <>
      <div className="todo">
        <li className="todo-items">{value?.text}</li>
        <button className="crossbutton">
          <HiXMark />
        </button>
      </div>
    </>
  );
};

export default Todo;
