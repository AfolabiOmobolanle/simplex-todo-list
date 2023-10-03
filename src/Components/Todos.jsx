import React from 'react';
import EditTodo from './EditTodos';

function Todos({ todos, deleteTodo, editTodo }) {
  return (
   <div className="todoList">
     <ul>
      {todos.map((todo, index) => (
          <li key ={index}>
          <EditTodo
          todo={todo}
          onDelete={() => deleteTodo(index)}
          onEdit={() => editTodo(index)}
        />
        </li>
      ))}
    </ul>
   </div>
  );
}

export default Todos;
