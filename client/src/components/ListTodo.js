import React from 'react';
import { FaTrash } from "react-icons/fa";

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li className="delete-button" >
             <span className="item"> {todo.action}</span>
              <span  className="trash" key={todo._id} onClick={() => deleteTodo(todo._id)}><FaTrash  /></span>
            </li>
          );
        })
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
};
export default ListTodo;