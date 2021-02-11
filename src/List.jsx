import React from "react";

const not_done = {background: "red", color: "white", padding: "2px", borderRadius: "3px;"};
const done = {background: "green", color: "white", padding: "2px", borderRadius: "3px;"};
const state = "not done";

const List = ({ details, onDelete }) => (
  <tr>
        <td>{details.id}</td>
        <td>{details.titre}</td>
        <td>{details.description}</td>
        <td><span style={state == "not done" ? not_done : done}>{state}</span></td>
        <td>
          <input type="checkbox" />
          {/* <button onClick={() => onDelete(details.id)}><img src="supp.png" alt="...image" /></button> */}
        </td>
  </tr>
);

export default List;