import React, { useState } from "react";

function ListItem(props) {
  const [task, setTask] = useState("");
  const [checkempty, setCheckempty] = useState(true);
  const handletext = (event) => {
    if (event.target.value !== "") {
      setTask(event.target.value);
      setCheckempty(false);
    } else {
      setCheckempty(true);
    }
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
            props.taskChange(props.index, task, checkempty);
          }}
        >
          saveTask
        </button>
        <button
          className="delete"
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
