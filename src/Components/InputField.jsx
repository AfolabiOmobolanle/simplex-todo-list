import React, { useState, useEffect } from 'react';

function InputField({ addTodo, editingIndex, todos }) {
  const [todoText, setTodoText] = useState('');

  // Handle editing when editingIndex changes
  useEffect(() => {
    if (editingIndex !== null) {
      setTodoText(todos[editingIndex]);
    } else {
      setTodoText('');
    }
  }, [editingIndex, todos]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };

  return (
     <form onSubmit={handleSubmit} className="inputField">
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">{editingIndex !== null ? 'Save' : 'Add'}</button>
    </form>
  );
}

export default InputField;
