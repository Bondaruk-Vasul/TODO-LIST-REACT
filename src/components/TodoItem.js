import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteTodo } from '../slices/todoSlice';

import './TodoItem.css';

import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import TodoModal from './TodoModal';

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success('Todo Deleted Successfully');
    }
     const handleUpdate = () => {
         setEditModalOpen(true);
    }
    return (
        <>
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
            <TodoModal type="update" todo={todo} modalOpen={editModalOpen} setModalOpen={setEditModalOpen}/>
        </>
    );
}

export default TodoItem