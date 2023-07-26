import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { addTodo } from '../../store/todos/todoSlice';
// import { updateTodo } from '../../store/todos/todoSlice';

import MiniLogo from '../../assets/img/MiniLogo.png';

import './style.css';



export const TodoCreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

//     const checkIfTodoWasUpdated = () => {
//     return todo.title !== title || todo.date !== date || todo.discription !== discription;
//   };

    const handleSubmit = e => {
        e.preventDefault();
        if (title && description && date) {
            dispatch(
                addTodo({
                    title,
                    description,
                    date,
                })
            );
            setTitle("");
            setDescription("");
            setDate("");
        }
    }    //    if (type === 'update') {
        // if (checkIfTodoWasUpdated()) {
        //   dispatch(updateTodo({ ...todo, title, date, discription }));
        // } else {
        //   toast.error('No Changes Made');
        // }

    return (
        <div className='wrapper'>
            <header className="header-two">
                    <button id="but" onClick={handleSubmit} >add task</button>
                <NavLink to="/">
                    <button id="create-close-button" className="butt">X</button>
                </NavLink>
            </header>

            <main className="basic-page-create">
                <img className="icon-loading-two" src={MiniLogo} alt="loading" />
                <div id="new-task-form" >
                    <form className="basic-page-create-two" onSubmit={e => handleSubmit(e)}>
                        <h2>Title</h2>
                        <input
                            id="task-title"
                            type="text"
                            className="title"
                            placeholder="Enter task title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            maxLength="15"
                            minLength="3"
                        />
                        <div className="basic-page-create-three">
                            <h2>Description</h2>
                            <textarea
                                name="description"
                                type="textarea"
                                id="task-description"
                                cols="30" rows="10"
                                className="description"
                                placeholder="Enter task description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                maxLength="40"
                                minLength="5"
                            ></textarea>
                        </div>
                        <div className="basic-page-create-four">
                            <h2>Date end</h2>
                            <input
                                id="task-end-date"
                                type="date"
                                className="date-end"
                                placeholder="Click here to choose date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                min="2023-07-24"
                            />
                        </div>
                    </form>
                </div>
            </main>

            <footer className="basement-two">
                <div>
                    <button id="add-page" className="todo-btn" onClick={handleSubmit} >Add</button>
                    <NavLink to="/">
                        <button className="basement-but-three" >cancel</button>
                    </NavLink>
                </div>
            </footer>
        </div>
    );
}