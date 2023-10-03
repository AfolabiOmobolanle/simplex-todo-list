import React, { useState } from 'react';
import './index.css';
import InputField from './Components/InputField';
import Todos from './Components/Todos';
import { TodosHeader } from './Components/TodosHeader';

function App() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  // State to handle editing
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to add a new todo
  const addTodo = (todoText) => {
    if (todoText) {
      if (editingIndex !== null) {
        // If editing, update the todo at editingIndex
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = todoText;
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        // If not editing, add a new todo
        setTodos([...todos, todoText]);
      }
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Function to edit a todo
  const editTodo = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className='app'>
      <TodosHeader className='header'/>
      <InputField addTodo={addTodo} editingIndex={editingIndex} todos={todos} />
      <Todos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
