import React from 'react';
import { FaTrash } from "react-icons/fa";
import '../Style.css'


const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <ul className="todo_ul">
      {todos && todos.length > 0 ? (
        todos.map((todo,key) => {
          return (
            <li className="delete-button todo_li" key={key}>
             <span className="item"> {todo.action}</span>
              <span  className="trash"  key={todo._id} onClick={() => deleteTodo(todo._id)}><FaTrash  /></span>
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