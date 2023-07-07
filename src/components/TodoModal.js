import React, { useState } from 'react';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import './TodoModal.css';
import { v4 as uuid } from 'uuid';

import Downtload from '../img/Downtload.png';

function TodoModal({ modalOpen, setModalOpen }) {
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && discription && date) {
            dispatch(
                addTodo({
                    id: uuid(),
                    title,
                    discription,
                    date,
                    time: new Date().toLocaleDateString(),
                })
            );
            toast.success('Task added Successfully');
            setModalOpen(false);
        } else {
            toast.error("Title shouldn't be empty");
        }
    };
    return (
        modalOpen && (
            <div className='modal'>
                <div className='wrapper'>
                    <header className="header-two">
                        <button id="but">add task</button>
                        <button
                            id="create-close-button"
                            className="butt"
                            onClick={() => setModalOpen(false)}
                            onKeyDown={() => setModalOpen(false)}
                        >
                            X
                        </button>
                    </header>

                    <main className="basic-page-create">
                        <img className="icon-loading-two" src={Downtload} alt="loading" />
                        <div id="new-task-form" >
                            <form className="basic-page-creat-two" onSubmit={(e) => handleSubmit(e)}>
                                <h2>Title</h2>
                                <input
                                    id="task-title"
                                    type="text"
                                    className="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter task title"
                                />
                                <div className="basic-page-creat-three">
                                    <h2>Discription</h2>
                                    <textarea
                                        name="deacriprion"
                                        id="task-description"
                                        cols="30" rows="10"
                                        className="discription"
                                        value={discription}
                                        onChange={(e) => setDiscription(e.target.value)}
                                        placeholder="Enter task description"></textarea>
                                </div>
                                <div className="basic-page-creat-four">
                                    <h2>Date end</h2>
                                    <input
                                        id="task-end-date"
                                        type="date"
                                        className="date-end"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        placeholder="Click here to choose date"
                                    />
                                </div>
                            </form>
                        </div>
                    </main>

                    <footer className="basement-two">
                        <button className="todo-btn" onClick={handleSubmit}>Add</button>
                        <button className="basment-but-thre"
                            onClick={() => setModalOpen(false)}
                            onKeyDown={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </footer>
                </div>
            </div>
        )
    );
}


export default TodoModal;