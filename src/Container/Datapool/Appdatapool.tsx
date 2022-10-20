import { toUnicode } from "punycode";
import React, { useState } from "react";
import { toEditorSettings } from "typescript";
import Datapool from "./Datapool";

const Appdatapool = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Datapool
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
    </>
  );
};

export default Appdatapool;
