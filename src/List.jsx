import React from "react";

// Basic status style
const statusStyle = {
  color: "white",
  padding: "2px",
  borderRadius: "3px"
}

// adding the status style to done or not done
const notDone = {
  ...{
    background: "red"
  }, ...statusStyle
};
const done = {
  ...{
    background: "green"
  }, ...statusStyle
};

const List = ({ details, onDelete, changeState }) => (
  <tr>
        <td>{details.id}</td>
        <td>{details.titre}</td>
        <td>{details.description}</td>
        <td>
          <span style={details.state ? done : notDone}>
            {details.state ? "done" : "not done"}
          </span>
        </td>
        <td>
          {details.state ?
            (<input checked="checked" type="checkbox" onChange={() => changeState(details.id)}/> ):
            (<input type="checkbox" onChange={() => changeState(details.id)}/> )
          }
          {/* <button onClick={() => onDelete(details.id)}><img src="supp.png" alt="...image" /></button> */}
        </td>
  </tr>
);

export default List;