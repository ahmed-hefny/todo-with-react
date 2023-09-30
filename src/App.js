import "./App.css";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem/todoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterText, setFilterText] = useState('');
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(filterText.toLowerCase())
  );
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);
  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-secondary">Todo List</h2>
        <div className="w-50 box-shadow border py-3 px-2">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter todo title to filter" value={filterText}
            onChange={(e) => setFilterText(e.target.value)}/>
          </div>
          <ul className="list-group">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo}/>
              // <li key={todo.id} className="list-group-item" >
              //  <span className={`${todo.completed ? "text-success text-line" : "text-secondary"}`}>
              //  {todo.title}
              //   </span> 
              // </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
