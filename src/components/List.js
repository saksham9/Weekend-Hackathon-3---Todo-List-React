import React from "react";
function List(props) {
  return props.list.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
}

export default List;
