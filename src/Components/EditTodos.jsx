import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function EditTodo({ todo, onDelete, onEdit }) {
  return (
   <div className="editIcons">
     
      {todo}
      <span onClick={onDelete}>
        <FaTrash />
      </span>
      <span onClick={onEdit}>
        <FaEdit />
      </span>
    
   </div>
  );
}

export default EditTodo;
