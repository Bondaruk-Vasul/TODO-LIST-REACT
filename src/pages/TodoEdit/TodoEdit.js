import React from 'react'
import { NavLink } from 'react-router-dom';

import MiniLogo from '../../assets/img/MiniLogo.png';
import './style.css';

export const TodoEdit = () => {


    return (
        <div className='wrapper'>
            <header className="header-two">
                <NavLink to="/">
                <button id="but" >edit task</button>
                    <button id="create-close-button" className="butt">X</button>
                </NavLink>
            </header>
        
            <main className="basic-page-create">
                <img className="icon-loading-two" src={MiniLogo} alt="loading" />
                <div id="new-task-form" >
                    <form className="basic-page-create-two" >
                        <h2>Title</h2>
                        <input
                            id="task-title"
                            type="text"
                            className="title"
                            placeholder="Enter task title"
                            maxLength="15"
                            minLength="3"
                        />
                        <div className="basic-page-create-three">
                            <h2>Description</h2>
                            <textarea
                                name="description"
                                id="task-description"
                                cols="30" rows="10"
                                className="description"
                                placeholder="Enter task description"
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
                                min="2023-07-24"
                            />
                        </div>
                    </form>
                </div>
            </main>

            <footer className="basement-two">
                <div>
                    <button id="add-page" className="todo-btn">Add</button>
                    <button id="cancel" className="basement-but-three">Delete</button>
                </div>
            </footer>
        </div>
    );
}