import React from 'react';
import { useSelector } from 'react-redux';

import { selectTodoList } from '../../store/todos/selectors';
import { TodoItem } from '../TodoItem';

export const AppContent = () => {
  const todoList = useSelector(selectTodoList);
  const sortedTodoList = [...todoList];


  return (
    <ul className="todo-list" id="todo-list">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map(todo => <TodoItem todo={todo} key={todo.id} />)
        : ''}
    </ul>
  );
};
