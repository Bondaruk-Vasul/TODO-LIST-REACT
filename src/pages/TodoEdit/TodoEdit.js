import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateTodo } from '../../store/todos/todoSlice';
import { selectTodoList } from '../../store/todos/selectors';
import MiniLogo from '../../assets/img/MiniLogo.png';

export const TodoEdit = () => {
  const { id } = useParams(); // выняли со строки браузера айдишник
  const todoList = useSelector(selectTodoList); // выняли список всех todos
  const todo = todoList.find(item => item.id === id); // нашли нужный нам (редактируемый) todo item

  // Инициализировали все useState-ы с нужными начальными данными
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (title && description && date) {
      dispatch(
        updateTodo({
          id,
          title,
          description,
          date,
        })
      );
    }
  };

  return (
    <div className="wrapper">
      <header className="header-two">
        <NavLink to="/">
          <button id="but">edit task</button>
          <button id="create-close-button" className="butt">
            X
          </button>
        </NavLink>
      </header>

      <main className="basic-page-create">
        <img className="icon-loading-two" src={MiniLogo} alt="loading" />
        <div id="new-task-form">
          <form className="basic-page-create-two" onSubmit={handleSubmit}>
            <h2>Title</h2>
            <input
              id="task-title"
              type="text"
              className="title"
              placeholder="Enter task title"
              maxLength="15"
              minLength="3"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <div className="basic-page-create-three">
              <h2>Description</h2>
              <textarea
                name="description"
                id="task-description"
                cols="30"
                rows="10"
                className="description"
                placeholder="Enter task description"
                maxLength="40"
                minLength="5"
                value={description}
                onChange={e => setDescription(e.target.value)}
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
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <footer className="basement-two">
              <div>
                <button id="add-page" className="todo-btn" onClick={handleSubmit}>
                  Update
                </button>
              </div>
            </footer>
          </form>
        </div>
      </main>
    </div>
  );
};
