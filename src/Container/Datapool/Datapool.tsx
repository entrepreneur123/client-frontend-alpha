import React from "react";
import { PieChart } from "recharts";
import Piechart from "./chart/Piechart";
import { HiPlus } from "react-icons/hi";
import Todo from "./Todo";

import "./Datapool.css";

import Sidebar from "../../components/sidebar/Sidebar";

//import Header from "../header/Header";
type DatapoolProps = {
  setInputText: any;
  todos: any;
  setTodos: any;
  inputText: any;
};

const Datapool = ({
  setInputText,
  todos,
  setTodos,
  inputText,
}: DatapoolProps) => {
  const inputTextHandler = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText }]);
    setInputText("");
  };
  console.log(todos);
  return (
    <>
      {" "}
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="ptext1">Datapool</div>
      <div className="data__pool">
        <div>
          <div className="size">Size of DFrame datapool is 105.91</div>
          <div className="add">
            <h4 className="heading">Add tags</h4>
            <div className="inputbutton">
              <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="sendinput"
              />
              <button
                onClick={submitHandler}
                type="submit"
                className="sendbutton"
              >
                <HiPlus />
              </button>
            </div>
          </div>

          <div className="add__container">
            <div className="add__first">
              {todos?.map((value: any, key: number) => (
                <Todo value={value} key={key} />
              ))}
            </div>
            <div className="add__first">
              {todos?.map((value: any, key: number) => (
                <Todo value={value} key={key} />
              ))}
            </div>
          </div>
        </div>

        <div className="piechart">
          <Piechart />
        </div>
      </div>
    </>
  );
};

export default Datapool;
