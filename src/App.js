import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Ajout from "./Ajout";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([
  { id: 1, titre: "livre 1", description: "description livre 1" },
  { id: 2, titre: "livre 2", description: "description livre 2" },
  { id: 3, titre: "livre 3", description: "description livre 3" }
]);


  const handleAdd = todo => {
    todo.id = (todos[todos.length-1].id + 1);
    console.log("todo: ",todo)

    const updatedTodos = [...todos];
    updatedTodos.push(todo);
    setTodos(updatedTodos);
  };
  const handleDelete = id => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex(todo => todo.id === id);
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };


  return (
    <div>
      <h1><span id="theme">Stack</span>Do</h1>
      <div id="gauche">
        Add Todos
      </div> <br/>
      <div id="droite">
        Todos
      </div>
      <Ajout onTodoAdd={handleAdd} />
      <div id="droite2">
        <table rules="basic" >
          <thead>
            <tr id="tabEntete">
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <List
                key={todo.id}
                details={todo}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
