import React, { useState } from "react";

function ListItem(props) {
  const [task, setTask] = useState("");
  const handletext = (event) => {
    setTask(event.target.value);
  };
  return (
    <li key={props.key} className="list">
      {props.item}
      <span>
        <textarea
          className="editTask"
          onChange={handletext}
          value={task}
        ></textarea>
        <button
          className="saveTask"
          onClick={() => {
            props.taskChange(props.index, task);
          }}
        >
          saveTask
        </button>
        <button
          onClick={() => {
            props.onDelete(props.index);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
export default ListItem;
