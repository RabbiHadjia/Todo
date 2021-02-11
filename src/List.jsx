import React from "react";

const List = ({ details, onDelete }) => (
  <tr>
        <td>{details.id}</td>
        <td>{details.titre}</td>
        <td>{details.description}</td>
        <td>not done</td>
        <td><input type="checkbox" /><button id="bout" onClick={() => onDelete(details.id)}>
            <img src="supp.png" alt="...image" /></button>
        </td>
  </tr>
);

export default List;