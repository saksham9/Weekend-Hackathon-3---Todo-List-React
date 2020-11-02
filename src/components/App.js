import React from "react";
import "./../styles/App.css";

function Task(props) {
  const [editTask, setEditTask] = React.useState(false);
  const [content, setContent] = React.useState(props.content);
  const [saveEnabled, setSaveEnabled] = React.useState(true);
  const handleEdit = (e) => {
    setEditTask(true);
  };
  const handleDelete = (e) => {
    props.handleDelete(props.content);
  };
  const handleSave = (e) => {
    let newContent = content.trim();
    props.handleEdit(props.content, newContent);
  };
  const handleTextChange = (e) => {
    setContent(e.target.value);
    if (e.target.value.trim().length > 0) {
      setSaveEnabled(true);
    } else {
      setSaveEnabled(false);
    }
  };
  return (
    <div className="list">
      <span >{props.content}</span>
      <button className="edit" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      {editTask && (
        <>
          <textarea
            className="editTask"
            value={content}
            onChange={handleTextChange}
          />
          <button
            className="saveTask"
            onClick={handleSave}
            disabled={!saveEnabled}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}
function App() {
  const [taskList, setTaskList] = React.useState([]);
  const [taskText, setTaskText] = React.useState("");
  const handleChangeTextArea = (event) => {
    setTaskText(event.target.value);
  };
  const handleTaskEdit = (text, newText) => {
    //console.log(text, newText);
    const newTaskList = [...taskList];
    for (let i = 0; i < newTaskList.length; ++i) {
      if (newTaskList[i] === text) {
        newTaskList[i] = newText;
      }
    }
    //console.log(newTaskList);
    setTaskList(newTaskList);
  };
  const handleTaskDelete = (text) => {
    const newTaskList = taskList.filter((txt) => txt !== text);
    setTaskList(newTaskList);
  };
  const handleClick = (event) => {
    let text = taskText.trim();
    if (text.length === 0) {
      setTaskText("");
      return;
    }
    const newTaskList = [...taskList];
    newTaskList.push(text);
    setTaskText("");
    setTaskList(newTaskList);
  };
  return (
    <div id="main">
        <textarea id="task" onChange={handleChangeTextArea} value={taskText} />
        <button id="btn" onClick={handleClick}>
          Add
        </button>
        {taskList.length > 0 &&
          taskList.map((text) => (
            <Task
              key={text}
              content={text}
              handleEdit={handleTaskEdit}
              handleDelete={handleTaskDelete}
            />
          ))}
    </div>
  );
}

export default App;