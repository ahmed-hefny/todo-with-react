import React from "react";
import './todoItem.css'

const TodoItem = ({ todo }) => {
    console.log(todo)
  return (
    <li key={todo.id} className={`list-group-item ${todo.completed ? "bg-light": "bg-white"}`}>
      <span 
        className={`${
          todo.completed ? " text-success text-line" : "text-secondary"
        }`}
      >
        {todo.title} - {todo.completed}
      </span>
    </li>
  );
};

export default TodoItem;
