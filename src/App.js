import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Ajout from "./Ajout";
import List from "./List";

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, titre: "livre 1", description: "description livre 1", state: true },
    { id: 2, titre: "livre 2", description: "description livre 2", state: false  },
    { id: 3, titre: "livre 3", description: "description livre 3", state: true }
  ]);

  const handleAdd = todo => {
    todo.id = todos[todos.length-1].id + 1;
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

  const changeState = id =>{
    // loop over todos and change the state on the given id
    const updatedTodos = todos.map((elt, index) => {
      elt.state = (elt.id === id) ? !elt.state : elt.state;
      return elt;
    });
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
              <th style={{width: "20px"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <List
                key={index}
                key={todo.id}
                details={todo}
                onDelete={handleDelete}
                changeState={changeState}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
