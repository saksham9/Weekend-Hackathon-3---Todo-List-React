import React, { useState } from "react";
import List from "./List";
import "./../styles/App.css";

function App() {
  const [task, setTask] = useState("");
  const [todolist, setTodoList] = useState([]);
  const handleClick = () => {
    if (task !== "") {
      const updatelist = [...todolist];
      updatelist.push(task);
      setTodoList(updatelist);
      setTask("");
      //console.log(updatelist);
    }
  };
  const handletext = (event) => {
    setTask(event.target.value);
  };
  const taskChange = (index1, task) => {
    const updatelist = todolist.map((item, index) => {
      if (index === index1) {
        item = task;
      }
      return item;
    });
    setTodoList(updatelist);
  };
  const onDelete = (index1) => {
    const updatelist = todolist.filter((item, index) => index !== index1);
    setTodoList(updatelist);
  };
  return (
    <div id="main">
      <textarea id="task" onChange={handletext} value={task}></textarea>
      <button id="btn" onClick={handleClick}>
        Add
      </button>
      <ol>
        <List list={todolist} taskChange={taskChange} onDelete={onDelete} />
      </ol>
    </div>
  );
}

export default App;
