import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { NavLink} from 'react-router-dom';

import { deleteTodo } from '../../store/todos/todoSlice';

import './styles.css';

export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };
    
  return (
    <>
      <li >
        <div className="icon-delete" onClick={handleDelete} onKeyDown={handleDelete} role="button" tabIndex={0}>
          <MdDelete />
        </div>
        <NavLink to={`/edit/${todo.id}`} >
             <div className="icon-update" role="button" tabIndex={0}>
                <MdEdit />
             </div>
        </NavLink>
        <p>{todo.time}</p>
        <p className="todo-date">{todo.date}</p>
        <h5>{todo.title}</h5>
        <p className="new-description">{todo.description}</p>
        <input type='checkbox'  className="checkbox-custom"   />
      </li>
    </>
  );
};
