import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import { addTodo, updateTodo } from '../../store/todos/todoSlice';

import Downtload from '../../assets/img/Downtload.png';

import './styles.css';

export const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const checkIfTodoWasUpdated = () => {
    return todo.title !== title || todo.date !== date || todo.discription !== discription;
  };

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setDiscription(todo.discription);
      setDate(todo.date);
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = e => {
    e.preventDefault();

    if (title === '') {
      toast.error('Please enter a title.');
      return;
    }

    if (title && discription && date) {
      if (type === 'add') {
        dispatch(
          addTodo({
            title,
            discription,
            date,
          })
        );

        toast.success('Task added Successfully');
      }
      if (type === 'update') {
        if (checkIfTodoWasUpdated()) {
          dispatch(updateTodo({ ...todo, title, date, discription }));
        } else {
          toast.error('No Changes Made');
        }
      }
      setModalOpen(false);
    }
  };
  return (
    modalOpen && (
      <div className="modal">
        <div className="wrapper">
          <header className="header-two">
            <button id="but" onClick={handleSubmit}>
              {type === 'update' ? 'Edit' : 'Add'} task
            </button>
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
            <div id="new-task-form">
              <form className="basic-page-creat-two" onSubmit={e => handleSubmit(e)}>
                <h2>Title</h2>
                <input
                  id="task-title"
                  type="text"
                  className="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter task title"
                />
                <div className="basic-page-creat-three">
                  <h2>Discription</h2>
                  <textarea
                    name="deacriprion"
                    id="task-description"
                    cols="30"
                    rows="10"
                    className="discription"
                    value={discription}
                    onChange={e => setDiscription(e.target.value)}
                    placeholder="Enter task description"
                  ></textarea>
                </div>
                <div className="basic-page-creat-four">
                  <h2>Date end</h2>
                  <input
                    id="task-end-date"
                    type="date"
                    className="date-end"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    placeholder="Click here to choose date"
                  />
                </div>
              </form>
            </div>
          </main>

          <footer className="basement-two">
            <button className="todo-btn" onClick={handleSubmit}>
              {type === 'update' ? 'Done !' : 'Add'}
            </button>
            <button
              className="basment-but-thre"
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
            >
              Cansel
            </button>
          </footer>
        </div>
      </div>
    )
  );
};
