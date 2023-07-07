import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteTodo } from '../slices/todoSlice';

import './TodoItem.css';

import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success('Todo Deleted Successfully');
    }
     const handleUpdate = () => {
        console.log('update');
    }
  return (
      <li>
          <div className='icon-delete' onClick={handleDelete} onKeyDown={handleDelete} role='button' tabIndex={0}>
              <MdDelete /> 
              
          </div>
          <div className='icon-update' onClick={handleUpdate} onKeyDown={handleUpdate} role='button' tabIndex={0}>
              <MdEdit />
          </div>
          <p className='todo-date'>
               {todo.date}
          </p>
          <h5 >
               {todo.title}
          </h5>
          <p className='new-discription'>
               {todo.discription}
          </p>
          </li>
  )
}

export default TodoItem