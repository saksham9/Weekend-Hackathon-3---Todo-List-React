import React from "react";
import ListItem from "./ListItem";
function List(props) {
  return props.list.map((item, index) => {
    return (
      <ListItem
        key={index}
        className="list"
        item={item}
        index={index}
        taskChange={props.taskChange}
        onDelete={props.onDelete}
      />
    );
  });
}

export default List;
