import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTodoList } from '../../store/todos/selectors';
import { TodoItem } from './TodoItem';
import { TodosCount } from './TodosCount';
import MiniLogo from '../../assets/img/MiniLogo.png';
import Group from '../../assets/img/Group.png';

import './style.css';

export const TodoList = () => {
  const [search, setSearch] = useState('');
  const todoList = useSelector(selectTodoList);

  const searchTodoList = todoList.filter(item => {
    return item.title.includes(search);
  });

  return (
    <div className="wrapper">
      <header className="header">
        <img className="icon-loading" src={MiniLogo} alt="loading" />
      </header>

      <main className="main">
        <TodosCount />

        <section className="basic-two">
          <input
            className="search"
            placeholder="type to search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="view-all">All</button>
          <button className="view-all">Todo</button>
          <button className="view-all">Done</button>
          <button className="view-all">Deleted</button>
        </section>

        <section className="basic-three">
          <form action="" className="date-task-one">
            <div className="title-date-task">Date Created</div>
            <div className="title-date-task">Date End</div>
            <div className="title-date-task">Title</div>
            <div className="title-date">Description</div>
          </form>
        </section>

        <ul className="todo-list" id="todo-list">
          {searchTodoList.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </main>

      <div className="footer">
        <NavLink to="/create">
          <button id="go-to-create">
            <img className="icon-button" src={Group} alt="Plus" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};
