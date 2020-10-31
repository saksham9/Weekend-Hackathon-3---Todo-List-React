import React, { useState } from "react";
import List from "./List";
import "./../styles/App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const handleClick = () => {
    if (task !== "") {
      const updatelist = [...list];
      updatelist.push(task);
      setList(updatelist);
      //console.log(updatelist);
    }
  };
  const handletext = (event) => {
    setTask(event.target.value);
  };
  return (
    <div id="main">
      <textarea id="task" onChange={handletext} value={task}></textarea>
      <button id="btn" onClick={handleClick}>
        Add
      </button>
      <ol>
        <List list={list} />
      </ol>
    </div>
  );
}

export default App;
