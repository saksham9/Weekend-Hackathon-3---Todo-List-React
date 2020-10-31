import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function ListItem(props) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = useState("");
  const [checkempty, setCheckempty] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <button className="edit" onClick={handleClickOpen}>
          Edit
        </button>
        <button
          className="delete"
          onClick={() => {
            props.onDelete(props.index);
          }}
        >
          Delete
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Edit your task"}
          </DialogTitle>
          <textarea
            className="editTask"
            onChange={handletext}
            value={task}
          ></textarea>
          <button
            className="saveTask"
            onClick={() => {
              props.taskChange(props.index, task, checkempty);
              setTask("");
              handleClose();
            }}
          >
            saveTask
          </button>
        </Dialog>
      </span>
    </li>
  );
}
export default ListItem;
